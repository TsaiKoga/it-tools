const state = {
  menuState: true,
  lang: 'en'
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuState = !state.menuState
  },
  TOGGLE_LANG (state, i18n) {
    if (i18n.locale === 'cn') {
      state.lang = 'en'
    } else {
      state.lang = 'cn'
    }
    i18n.locale = state.lang
  }
}

const actions = {
  toggleMenu ({ commit }) {
    // do something async
    commit('TOGGLE_MENU')
  },
  toggleLang ({ commit }, i18n) {
    commit('TOGGLE_LANG', i18n)
  }
}

export default {
  state,
  mutations,
  actions
}
