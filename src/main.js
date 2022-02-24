import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuerouter from 'vue-router'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuerouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
