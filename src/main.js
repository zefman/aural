import Vue from 'vue'
import './styles.scss'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
