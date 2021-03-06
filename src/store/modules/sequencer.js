import Vue from 'vue'
import Worker from '@/bpm.worker.js'

const bpmWorker = new Worker()
const bpm = 120
const beatLength = 60 / bpm
const noteLength = beatLength * 4

export const state = {
  bpm,
  beatLength,
  noteLength,
  currentNote: 1,
  trackCounter: 1,
  sequencerCounter: 0,
  numberOfNotes: 16,
  startTime: null,
  tracks: {},
  sequencers: {},
  schedulerInterval: null
}

export const mutations = {
  setBpm (state, bpm) {
    state.bpm = bpm
    state.beatLength = 60 / bpm
    state.noteLength = beatLength * 4
  },
  setCurrentNote (state, note) {
    Vue.set(state, 'currentNote', note)
  },
  setStartTime (state, time) {
    state.startTime = time
  },
  addSequencer (state, { defaultVoice }) {
    Vue.set(state.sequencers, state.sequencerCounter, {
      id: state.sequencerCounter,
      defaultVoice,
      tracks: []
    })
    state.sequencerCounter++
  },
  updateSequencer (state, { sequencer }) {
    Vue.set(state.sequencers, [sequencer.id], sequencer)
  },
  addTrack (state, { sequencer, voice, defaultNote }) {
    const id = state.trackCounter
    Vue.set(state.tracks, id, {
      id,
      voice,
      defaultNote,
      notes: {},
      sequencer: sequencer.id
    })
    state.sequencers[sequencer.id].tracks.push(id)
    state.trackCounter++
  },
  setTrackVoice (state, { track, voice }) {
    state.tracks[track.id].voice = voice
  },
  setTrackNote (state, { track, noteNumber, note }) {
    Vue.set(state.tracks[track.id].notes, noteNumber, note)
  },
  removeTrack (state, trackNumber) {
    // TODO remove track from sequencer
    delete state.tracks[trackNumber]
  },
  setSchedulerInterval (state, interval) {
    state.schedulerInterval = interval
  }
}

export const actions = {
  start ({ state, dispatch, commit, getters, rootGetters }) {
    const audioContext = rootGetters['audio/context']
    commit('setStartTime', audioContext.currentTime + 0.1)

    bpmWorker.onmessage = () => {
      if (audioContext.currentTime > state.startTime + (state.beatLength) * state.currentNote - 0.1) {
        console.log('Check notes')
        let nextNote = state.currentNote + 1
        if (nextNote > state.numberOfNotes) {
          nextNote = 0
          commit('setStartTime', state.startTime + state.beatLength * state.currentNote)
        }
        console.time(nextNote)
        console.timeEnd(state.currentNote)

        commit('setCurrentNote', nextNote)

        const notes = getters.getCurrentNotes
        const time = state.startTime + state.beatLength * state.currentNote // The time to schedule the note at
        notes.forEach(note => dispatch('audio/playNote', {
          voice: note.voice,
          note: note.note,
          duration: 1 / 4 * state.noteLength,
          time
        }, { root: true }))
      }
    }

    bpmWorker.postMessage({command: 'start'})
    // commit('setSchedulerInterval', interval)
  },
  addSequencer ({state, commit}, {defaultVoice}) {
    const sequencerId = state.sequencerCounter
    commit('addSequencer', {defaultVoice})

    return Promise.resolve(state.sequencers[sequencerId])
  },
  updateSequencer ({state, commit}, {sequencer}) {
    commit('updateSequencer', { sequencer })
    sequencer.tracks.forEach(trackId => {
      commit('setTrackVoice', { track: state.tracks[trackId], voice: sequencer.defaultVoice })
    })
  }
}

export const getters = {
  getCurrentNotes: state => {
    const notes = []
    Object.keys(state.tracks).forEach(trackId => {
      const track = state.tracks[trackId]
      const note = track.notes[state.currentNote + 1]
      if (note) {
        notes.push({
          note,
          voice: track.voice.name
        })
      }
    })
    return notes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
