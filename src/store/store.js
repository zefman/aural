import Vue from 'vue'
import Vuex from 'vuex'

import audio from './modules/audio'
import scheduler from './modules/scheduler'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    audio,
    scheduler
  }
})
