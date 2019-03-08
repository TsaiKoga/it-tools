const state = {
  menuState: true
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuState = !state.menuState
  }
}

const actions = {
  toggleMenu ({ commit }) {
    // do something async
    commit('TOGGLE_MENU')
  }
}

export default {
  state,
  mutations,
  actions
}
