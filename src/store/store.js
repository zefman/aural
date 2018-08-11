import Vue from 'vue'
import Vuex from 'vuex'

import audio from './modules/audio'
import sequencer from './modules/sequencer'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    audio,
    sequencer
  }
})
