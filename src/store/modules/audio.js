import WebAudioFontPlayer from 'webaudiofont'
import MIDIUtils from 'midiutils'
import voices from '@/voices'

const AudioContextFunc = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContextFunc()
const player = new WebAudioFontPlayer()

const state = {
  voices,
  loadedVoices: []
}

const mutations = {
  addVoice (state, voice) {
    state.loadedVoices.push(voice)
  }
}

const actions = {
  loadVoice ({commit}, {voice}) {
    return new Promise(resolve => {
      if (state.loadedVoices.includes(voice.name)) resolve(window[voice.name])

      player.loader.startLoad(audioContext, 'https://surikov.github.io/webaudiofontdata/sound/' + voice.file, voice.name)
      player.loader.waitLoad(function () {
        commit('addVoice', voice.name)
        resolve(window[voice.name])
      })
    })
  },
  playNote ({state}, {voice, time, duration, note}) {
    if (state.loadedVoices.includes(voice)) {
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
