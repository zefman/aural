const bpm = 120
const beatLength = 60 / bpm
const noteLength = beatLength * 4

export const state = {
  bpm,
  beatLength,
  noteLength,
  currentNote: 0,
  trackCounter: 0,
  startTime: null,
  tracks: {
    0: {
      voice: '_tone_0041_SoundBlasterOld_sf2',
      notes: {
        2: 'C-4',
        4: 'C-4'
      }
    }
  },
  schedulerInterval: null
}

export const mutations = {
  setCurrentNote (state, note) {
    state.currentNote = note
  },
  setStartTime (state, time) {
    state.startTime = time
  },
  addTrack (state, track) {
    state.tracks[state.trackCounter] = track
    state.trackCounter++
  },
  removeTrack (state, trackNumber) {
    delete state.tracks[trackNumber]
  },
  setSchedulerInterval (state, interval) {
    state.schedulerInterval = interval
  }
}

export const actions = {
  start ({ state, dispatch, commit, getters, rootGetters }) {
    console.log(rootGetters)
    const audioContext = rootGetters['audio/context']
    commit('setStartTime', audioContext.currentTime + 0.1)

    const interval = setInterval(() => {
      if (audioContext.currentTime > state.startTime + state.beatLength * state.currentNote - 0.1) {
        let nextNote = state.currentNote + 1
        if (nextNote > 8) {
          nextNote = 0
          commit('setStartTime', audioContext.currentTime + 0.1)
        }

        commit('setCurrentNote', nextNote)

        const notes = getters.getCurrentNotes
        const time = state.startTime + state.beatLength * state.currentNote // The time to schedule the note at
        notes.forEach(note => dispatch('audio/playNote', {
          voice: note.voice,
          note: note.note,
          duration: 1 / 8 * state.noteLength,
          time
        }, { root: true }))
      }
    }, 20)

    commit('setSchedulerInterval', interval)
  }
}

export const getters = {
  getCurrentNotes: state => {
    const notes = []
    Object.keys(state.tracks).forEach(trackId => {
      const track = state.tracks[trackId]
      const note = track.notes[state.currentNote]
      if (note) {
        notes.push({
          note,
          voice: track.voice
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
