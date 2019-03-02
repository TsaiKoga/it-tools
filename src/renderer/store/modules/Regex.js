const state = {
  regexExp: '',
  regexOpt: '',
  regexCont: '',
  regexResult: { status: 0, content: "Here's result." }
}

const mutations = {
  CLEAN_FIELDS (state) {
    state.regexExp = ''
    state.regexOpt = ''
    state.regexCont = ''
    state.regexResult = { status: 0, content: "Here's result." }
  },
  REGEX_MATCH (state, target) {
    if (target.name === 'regex-exp') {
      state.regexExp = target.value
    }
    if (target.name === 'regex-opt') {
      state.regexOpt = target.value
    }
    if (target.name === 'regex-content') {
      state.regexCont = target.value
    }

    // Do the Regex Match:
    try {
      if (state.regexCont !== '' && state.regexExp !== '') {
        let re = new RegExp(state.regexExp, state.regexOpt)
        let reGb = new RegExp(state.regexExp, state.regexOpt + 'g')
        let result = state.regexCont.match(re)

        if (result === null) {
          state.regexResult = { status: -1, content: 'No matches ...' }
        } else if (result.length === 1) {
          let matchContext = []
          let reGroup = []
          let beginPos = 0
          while ((reGroup = reGb.exec(result['input'])) !== null) {
            matchContext.push(reGroup['input'].slice(beginPos, reGroup['index']))
            matchContext.push(reGroup[0])
            beginPos = reGroup['index'] + reGroup[0].length
          }
          if (beginPos !== result['input'].length) {
            matchContext.push(result['input'].slice(beginPos, result['input'].length))
          }
          console.log(matchContext)
          state.regexResult = { status: 1, content: [], matchContext: matchContext }
        } else {
          let matchContext = []
          let matchGroups = []
          let reGroup = []
          let beginPos = 0
          while ((reGroup = reGb.exec(result['input'])) !== null) {
            matchContext.push(reGroup['input'].slice(beginPos, reGroup['index']))
            matchContext.push(reGroup[0])
            beginPos = reGroup['index'] + reGroup[0].length
            matchGroups.push(reGroup)
          }
          if (beginPos !== result['input'].length) {
            matchContext.push(result['input'].slice(beginPos, result['input'].length))
          }
          state.regexResult = { status: 1, content: matchGroups, matchContext: matchContext }
        }
      } else {
        state.regexResult = { status: 0, content: "Here's the result." }
      }
    } catch (err) {
      console.log(err)
      if (err.message.match(/expression/)) {
        state.regexResult = { status: -1, content: 'Expression Error' }
      } else if (err.message.match(/constructor/)) {
        state.regexResult = { status: -1, content: 'Invalid Option' }
      } else {
        state.regexResult = { status: -1, content: 'No Matches' }
      }
    }
    console.log(state)
  }
}

const actions = {
  cleanFields ({ commit }) {
    commit('CLEAN_FIELDS')
  },
  regexMatch ({ commit }, payload) {
    commit('REGEX_MATCH', payload.target)
  }
}

export default {
  state,
  mutations,
  actions
}
