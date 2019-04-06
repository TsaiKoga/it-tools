const state = {
  base64: ''
}

const mutations = {
  SET_IMAGE (state, payload) {
    let image = payload
    state.base64 = image
  },
  RESET_ALL () {
    state.base64 = ''
  }
}

const actions = {
  setImage ({ commit }, payload) {
    commit('SET_IMAGE', payload)
  },
  resetAll ({ commit }) {
    commit('RESET_ALL')
  }
}

export default {
  state,
  mutations,
  actions
}
