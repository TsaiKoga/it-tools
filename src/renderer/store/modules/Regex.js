import i18n from './../../i18n'

const state = {
  tabs: [
    { title: i18n.t('tabs.home'), isActive: true },
    { title: i18n.t('tabs.help'), isActive: false }
  ],
  currentTab: i18n.t('tabs.home'),
  regexExp: '',
  regexOpt: '',
  regexCont: '',
  regexResult: { status: 0, content: i18n.t('regex.heresResult') }
}

const mutations = {
  SET_INIT_STATE (state, payload) {
    state.tabs = payload.tabs
    state.currentTab = payload.currentTab
    state.regexResult = payload.regexResult
  },
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
    state.regexResult = { status: 0, content: i18n.t('regex.heresResult') }
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
      let regexResult = { status: 1, content: matchedGroups, matchedContext: matchedContext }
      return regexResult
    }

    // Do the Regex Match:
    function execMatchContent (state, regexCont) {
      let regexResult
      try {
        let re = new RegExp(state.regexExp, state.regexOpt)
        let reGb = new RegExp(state.regexExp, state.regexOpt + 'g')
        let result = regexCont.match(re)

        if (result === null) {
          regexResult = { status: -1, content: i18n.t('regex.noMatches'), matchedContext: regexCont }
        } else {
          if (state.regexExp === '()') {
            let matchedContext = []
            regexCont.split('').forEach((val, index) => {
              matchedContext.push(val)
              matchedContext.push('')
            })
            let matchedGroups = [...Array(regexCont.length)].map(() => [regexCont, ''])
            regexResult = { status: 1, content: matchedGroups, matchedContext: matchedContext }
          } else {
            regexResult = matchContext(reGb, result, result.length)
          }
        }
      } catch (err) {
        console.log(err.message)
        if (err.message.match(/expression/)) {
          if (err.message.match(/Unterminated\s+group/)) {
            regexResult = { status: -1, content: i18n.t('regex.uHaveAnUnmatchedPats'), matchedContext: regexCont }
          } else {
            regexResult = { status: -1, content: i18n.t('regex.expError'), matchedContext: regexCont }
          }
        } else if (err.message.match(/constructor/)) {
          regexResult = { status: -1, content: i18n.t('regex.invalidOpt'), matchedContext: regexCont }
        } else {
          regexResult = { status: -1, content: i18n.t('regex.noMatches'), matchedContext: regexCont }
        }
      }
      return regexResult
    }

    if (state.regexCont === '' || state.regexExp === '') {
      state.regexResult = { status: 0, content: i18n.t('regex.heresResult') }
    } else {
      let regexResults = []
      // loop more sample test content
      state.regexCont.split('\n').forEach((content) => {
        regexResults.push(execMatchContent(state, content))
      })
      let matchedContexts = []
      let contents = []
      let errorFlag = 1
      console.log(regexResults)
      regexResults.forEach((result) => {
        if (result['status'] === 1) {
          if (result['content'].length > 0) contents = contents.concat(result['content'])
          errorFlag = 0
        }
        matchedContexts.push(result['matchedContext'])
      })
      if (errorFlag === 0) {
        state.regexResult = { status: 1, content: contents, matchedContext: matchedContexts }
      } else {
        state.regexResult = regexResults[0]
      }
      console.log(state.regexResult)
    }
  }
}

const actions = {
  setInitState ({ commit }, payload) {
    commit('SET_INIT_STATE', payload)
  },
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
