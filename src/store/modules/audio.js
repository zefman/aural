import WebAudioFontPlayer from 'webaudiofont'
import MIDIUtils from 'midiutils'

const AudioContextFunc = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContextFunc()
const player = new WebAudioFontPlayer()

const state = {
  voices: []
}

const mutations = {
  addVoice (state, voice) {
    state.voices.push(voice)
  }
}

const actions = {
  loadVoice ({commit}, {path, name}) {
    return new Promise(resolve => {
      player.loader.startLoad(audioContext, path, name)
      player.loader.waitLoad(function () {
        commit('addVoice', name)
        resolve(window[name])
      })
    })
  },
  playNote ({state}, {voice, time, duration, note}) {
    if (state.voices.includes(voice)) {
      player.queueWaveTable(
        audioContext,
        audioContext.destination,
        window[voice],
        time,
        MIDIUtils.noteNameToNoteNumber(note),
        duration
      )
    }
  }
}

const getters = {
  context: () => {
    return audioContext
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
