import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
