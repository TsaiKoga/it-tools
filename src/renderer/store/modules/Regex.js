const state = {
  tabs: [
    { title: 'Home', isActive: true },
    { title: 'Help', isActive: false }
  ],
  currentTab: 'Home',
  regexExp: '',
  regexOpt: '',
  regexCont: '',
  regexResult: { status: 0, content: "Here's result." }
}

const mutations = {
  SET_NAV (state, payload) {
    state.tabs.forEach((tabs, i) => {
      if (i === payload.index) {
        state.tabs[payload.index]['isActive'] = true
        state.currentTab = payload.title
      } else {
        state.tabs[i]['isActive'] = false
      }
    })
  },
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

    // Main Match Method:
    function matchContext (regexGlobal, result, flag) {
      let matchedContext = []
      let matchedGroups = []
      let reGroup = []
      let beginPos = 0
      let preventingTag = 0
      while ((reGroup = regexGlobal.exec(result['input'])) !== null) {
        if (preventingTag > reGroup['index']) break
        matchedContext.push(reGroup['input'].slice(beginPos, reGroup['index']))
        matchedContext.push(reGroup[0])
        beginPos = reGroup['index'] + reGroup[0].length
        if (flag > 1) matchedGroups.push(reGroup)
        preventingTag++
      }
      if (beginPos !== result['input'].length) {
        matchedContext.push(result['input'].slice(beginPos, result['input'].length))
      }
      state.regexResult = { status: 1, content: matchedGroups, matchedContext: matchedContext }
    }

    // Do the Regex Match:
    try {
      if (state.regexCont !== '' && state.regexExp !== '') {
        let re = new RegExp(state.regexExp, state.regexOpt)
        let reGb = new RegExp(state.regexExp, state.regexOpt + 'g')
        let result = state.regexCont.match(re)

        if (result === null) {
          state.regexResult = { status: -1, content: 'No matches ...' }
        } else {
          if (state.regexExp === '()') {
            let matchedContext = []
            state.regexCont.split('').forEach((val, index) => {
              matchedContext.push(val)
              matchedContext.push('')
            })
            let matchedGroups = [...Array(state.regexCont.length)].map(() => [state.regexCont, ''])
            state.regexResult = { status: 1, content: matchedGroups, matchedContext: matchedContext }
          } else {
            matchContext(reGb, result, result.length)
          }
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
  }
}

const actions = {
  setNav ({ commit }, payload) {
    commit('SET_NAV', payload)
  },
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
