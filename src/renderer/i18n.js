import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from './lang/messages'

Vue.use(VueI18n)
if (!window.localStorage.getItem('locale')) {
  window.localStorage.setItem('locale', 'en')
}

const i18n = new VueI18n({
  locale: window.localStorage.getItem('locale'),
  messages: messages
})

export default i18n
