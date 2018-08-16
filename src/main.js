import Vue from 'vue'
import './styles.scss'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import AuralBtn from '@/components/common/AuralBtn'

Vue.config.productionTip = false

Vue.component('aural-btn', AuralBtn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
