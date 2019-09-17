import i18n from './../../i18n'
import * as moment from 'moment'
import * as parser from 'cron-parser'

const CRON_DATETIME_MAX_LIMIT = 200
const CRON_DATETIME_DEFAULT_COUNT = 7
const CRON_SPECIAL_TYPES = [ '@yearly', '@annually', '@monthly', '@daily', '@hourly', '@reboot' ]
const CRON_SELECTED_UNIT = {
  'min': false,
  'hour': false,
  'dayOfMonth': false,
  'month': false,
  'dayOfWeek': false
}
const CRON_OPTIONS = {
  currentDate: moment.utc().local().format('YYYY-MM-DD HH:mm:ss'),
  utc: true
}

const helpers = {
  getTermOptions () {
    return {
      default: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '@yearly', explaination: i18n.t('cronHelp.nonStandard') },
        { symbol: '@annually', explaination: i18n.t('cronHelp.nonStandard') },
        { symbol: '@monthly', explaination: i18n.t('cronHelp.nonStandard') },
        { symbol: '@daily', explaination: i18n.t('cronHelp.nonStandard') },
        { symbol: '@hourly', explaination: i18n.t('cronHelp.nonStandard') },
        { symbol: '@reboot', explaination: i18n.t('cronHelp.nonStandard') }
      ],
      min: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '0-59', explaination: i18n.t('cronHelp.allowedValues') }
      ],
      hour: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '0-23', explaination: i18n.t('cronHelp.allowedValues') }
      ],
      dayOfMonth: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '1-31', explaination: i18n.t('cronHelp.allowedValues') }
      ],
      month: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '1-12', explaination: i18n.t('cronHelp.allowedValues') },
        { symbol: 'JAN-DEC', explaination: i18n.t('cronHelp.alternativeSingleValues') }
      ],
      dayOfWeek: [
        { symbol: '*', explaination: i18n.t('cronHelp.anyValue') },
        { symbol: ',', explaination: i18n.t('cronHelp.valueListSeparator') },
        { symbol: '-', explaination: i18n.t('cronHelp.rangeOfValues') },
        { symbol: '/', explaination: i18n.t('cronHelp.stepValues') },
        { symbol: '0-6', explaination: i18n.t('cronHelp.allowedValues') },
        { symbol: 'SUN-SAT', explaination: i18n.t('cronHelp.alternativeSingleValues') }
      ]
    }
  },

  translateSpecialWord () {
    if (state.cronExp === '@yearly') {
      state.cronResult['content'] = i18n.t('cronHelp.yearly')
      return true
    }
    if (state.cronExp === '@annually') {
      state.cronResult['content'] = i18n.t('cronHelp.annually')
      return true
    }
    if (state.cronExp === '@monthly') {
      state.cronResult['content'] = i18n.t('cronHelp.monthly')
      return true
    }
    if (state.cronExp === '@daily') {
      state.cronResult['content'] = i18n.t('cronHelp.daily')
      return true
    }
    if (state.cronExp === '@hourly') {
      state.cronResult['content'] = i18n.t('cronHelp.hourly')
      return true
    }
    if (state.cronExp === '@reboot') {
      state.cronResult['content'] = i18n.t('cronHelp.afterReboot')
      return true
    }
    return false
  },

  translateToLanguage (state) {
    if (this.translateSpecialWord()) return true

    let phrases = state.cronExp.split(/\s+/)
    switch (state.currentUnit) {
      case 'min':
        state.cronResult['content'] = i18n.t('cron.at') + ' ' + this.translateLanguageByMode(phrases[0], 'minute')
        break
      case 'hour':
        state.cronResult['content'] = i18n.t('cron.at') + ' ' + this.translateLanguageByMode(phrases[1], 'hour')
        break
      case 'dayOfMonth':
        state.cronResult['content'] = i18n.t('cron.on') + ' ' + this.translateLanguageByMode(phrases[2], 'dayOfMonth')
        break
      case 'month':
        state.cronResult['content'] = i18n.t('cron.in') + ' ' + this.translateLanguageByMode(phrases[3], 'month')
        break
      case 'dayOfWeek':
        state.cronResult['content'] = i18n.t('cron.on') + ' ' + this.translateLanguageByMode(phrases[4], 'dayOfWeek')
        break
      default:
        state.cronResult['content'] = ''
        break
    }
    if (i18n.locale === 'cn') state.cronResult['content'] = state.cronResult['content'].replace(/\s/g, '')
  },

  translateLanguageByMode (phrase, mode) {
    let terms = phrase.split(',')
    if (terms.length === 1) return this.translateEachTerm(terms[0], mode)
    if (terms.length > 1) {
      let lang = ''
      if (i18n.locale === 'en' && mode === 'dayOfMonth') lang += i18n.t('cronHelp.dayOfMonth')
      for (let i = 0; i < terms.length; i++) {
        if (i === (terms.length - 2)) {
          lang = lang + this.translateEachTerm(terms[i], mode) + ' ' + i18n.t('cron.and') + ' '
        } else if (i === (terms.length - 1)) {
          lang = lang + ' ' + this.translateEachTerm(terms[i], mode) + ' '
        } else {
          lang = lang + this.translateEachTerm(terms[i], mode) + ', '
        }
      }
      return lang
    } else {
      return ''
    }
  },

  translateEachTerm (term, mode, fromRange = false) {
    if (term === '*') {
      return this.translateEveryTerm(mode)
    } else if (term.match(/\//)) {
      let skip = term.split(/\//)
      let _range = this.translateRange(skip[0], mode, true)
      if (i18n.locale === 'cn') {
        return i18n.t('cron.every') + _range + i18n.t('cron.of') + i18n.t('cron.every') + this.translateOrdinalSuffix(skip[1], mode)
      } else {
        return i18n.t('cron.every') + ' ' + this.translateOrdinalSuffix(skip[1], mode) + ' ' + _range
      }
    } else if (term.match(/-/)) {
      return this.translateRange(term, mode)
    } else {
      if (mode === 'dayOfWeek') {
        return this.getDayOfWeek(term)
      } else if (mode === 'month') {
        return this.getMonthName(term)
      } else {
        return (i18n.locale === 'en' && (fromRange || mode === 'dayOfMonth')) ? term : (term + ' ' + i18n.t('cronHelp.' + mode))
      }
    }
  },

  translateEveryTerm (mode) {
    if (mode === 'dayOfWeek' && i18n.locale === 'cn') return '每周的每一天'
    if (mode === 'dayOfMonth' && i18n.locale === 'cn') return '每月的每一天'
    return i18n.t('cron.every') + ' ' + i18n.t('cronHelp.' + mode)
  },

  translateRange (term, mode, fromStep = false) {
    if (term === '*') {
      return ''
    } else if (term.match('-')) {
      let range = term.split(/-/)
      let rangeLang = i18n.t('cron.from') + ' ' + this.translateEachTerm(range[0], mode, true) + ' ' + i18n.t('cron.through') + ' ' + this.translateEachTerm(range[1], mode, true)
      return (i18n.locale === 'en' && !fromStep) ? (i18n.t('cronHelp.' + mode) + ' ' + rangeLang) : rangeLang
    } else if (fromStep === true) {
      let rangeLang = i18n.t('cron.from') + ' ' + this.translateEachTerm(term, mode, true) + ' ' + i18n.t('cron.through') + ' ' + this.translateEachTerm(this.getTheEndByMode(mode), mode, true)
      return (i18n.locale === 'en' && !fromStep) ? (i18n.t('cronHelp.' + mode) + ' ' + rangeLang) : rangeLang
    }
  },

  translateOrdinalSuffix (num, mode) {
    if (i18n.locale === 'en') {
      if (parseInt(num) === 1) return '1st' + ' ' + i18n.t('cronHelp.' + mode)
      if (parseInt(num) === 2) return '2nd' + ' ' + i18n.t('cronHelp.' + mode)
      if (parseInt(num) === 3) return '3rd' + ' ' + i18n.t('cronHelp.' + mode)
      if (parseInt(num) > 3) return num + 'th' + ' ' + i18n.t('cronHelp.' + mode)
    } else {
      let lang = '第' + num
      return (mode === 'dayOfWeek' || mode === 'dayOfMonth') ? lang + '天' : lang + i18n.t('cronHelp.' + mode)
    }
  },

  getDayOfWeek (num) {
    let dayOfWeek = [
      i18n.t('cronHelp.sunday'),
      i18n.t('cronHelp.monday'),
      i18n.t('cronHelp.tuesday'),
      i18n.t('cronHelp.wednesday'),
      i18n.t('cronHelp.thursday'),
      i18n.t('cronHelp.friday'),
      i18n.t('cronHelp.saturday')
    ]
    return dayOfWeek[num]
  },

  getDayOfMonth (num) {
    return (state.locale === 'en') ? num : (num + i18n.t('cronHelp.dayOfMonth'))
  },

  getMonthName (num) {
    let dayOfMonth = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }
    return (i18n.locale === 'en') ? dayOfMonth[num] : (num + i18n.t('cronHelp.month'))
  },

  getTheEndByMode (mode) {
    if (mode === 'minute') return '59'
    if (mode === 'hour') return '23'
    if (mode === 'dayOfMonth') return '31'
    if (mode === 'month') return '12'
    if (mode === 'dayOfWeek') return '0'
  }

}

const state = {
  tabs: [
    { title: i18n.t('tabs.home'), isActive: true },
    { title: i18n.t('tabs.help'), isActive: false }
  ],
  currentTab: i18n.t('tabs.home'),
  cronExp: '* * * * *',
  dateMaxCount: CRON_DATETIME_DEFAULT_COUNT,
  cronResult: {
    status: 0,
    content: i18n.t('cron.heresResult'),
    list: []
  },
  termOptions: helpers.getTermOptions(),
  currentUnit: 'default'
}

const mutations = {
  SET_INIT_STATE (state, payload) {
    state.tabs = payload.tabs
    state.currentTab = payload.currentTab
    state.cronResult = { status: 0, content: i18n.t('cron.heresResult'), list: [] }
    state.termOptions = helpers.getTermOptions()
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

  CRON_MATCH (state, target) {
    if (target.name === 'cron-exp') {
      state.cronExp = target.value
    }
    if (target.name === 'max-count') {
      if (target.value >= 1 && target.value <= CRON_DATETIME_MAX_LIMIT) {
        state.dateMaxCount = parseInt(target.value)
      } else if (target.value > CRON_DATETIME_MAX_LIMIT) {
        state.dateMaxCount = CRON_DATETIME_MAX_LIMIT
      } else if (target.value === '') {
        state.dateMaxCount = ''
        return false
      } else {
        state.dateMaxCount = CRON_DATETIME_DEFAULT_COUNT
      }
    }

    try {
      let expTerms = state.cronExp.split(/\s+/)
      let terms = expTerms.filter((term) => term.length !== 0)
      state.cronResult = { status: -1, content: '', list: [] }
      if (terms.length < 5 && !CRON_SPECIAL_TYPES.includes(state.cronExp)) {
        target.classList.add('invalid')
        state.cronResult = { status: -1, content: i18n.t('cronHelp.expNotComplete'), list: [] }
        return false
      } else {
        target.classList.remove('invalid')
        if (state.cronExp === '@reboot') {
          state.cronResult = { status: 1, content: i18n.t('cronHelp.afterReboot'), list: [] }
          return false
        }
      }
      let interval = (state.cronExp === '@annually') ? parser.parseExpression('0 0 1 1 *', CRON_OPTIONS) : parser.parseExpression(state.cronExp, CRON_OPTIONS)
      Array(parseInt(state.dateMaxCount)).fill(1).forEach((_, i) => {
        state.cronResult['list'].push(interval.next()['_date'].format('YYYY-MM-DD HH:mm:ss dddd'))
      })
      state.cronResult['status'] = 1
      if (state.cronResult['status'] >= 0) helpers.translateToLanguage(state)
    } catch (err) {
      console.log('Error: ' + err.message)
      target.classList.add('invalid')
      state.cronResult = { status: -1, content: err.message, list: [] }
      return false
    }
  },

  SELECT_UNIT (state, target) {
    let children = target.currentTarget.parentNode.childNodes
    children.forEach((child, i) => {
      if (child.classList && child.classList.contains('tag')) {
        child.classList.remove('selected')
      }
    })
    target.currentTarget.classList.add('selected')
    selectTextInInput()
    if (state.cronResult['status'] >= 0) helpers.translateToLanguage(state)

    function selectTextInInput () {
      let expTerms = state.cronExp.split(' ')
      let terms = expTerms.filter((term) => term.length !== 0)
      if (terms.length === 5) {
        let cronInput = document.getElementsByName('cron-exp')[0]
        cronInput.focus()
        if (target.currentTarget.classList.contains('min')) {
          cronInput.setSelectionRange(0, terms[0].length)
          state.currentUnit = 'min'
        }
        if (target.currentTarget.classList.contains('hour')) {
          cronInput.setSelectionRange((terms[0].length + 1), (terms[1].length + terms[0].length + 1))
          state.currentUnit = 'hour'
        }
        if (target.currentTarget.classList.contains('dayOfMonth')) {
          let endTermLen = getStrLengthInArray(terms, 0, 3)
          let endPos = endTermLen + 2
          let startTermLen = getStrLengthInArray(terms, 0, 2)
          let startPos = startTermLen + 2
          cronInput.setSelectionRange(startPos, endPos)
          state.currentUnit = 'dayOfMonth'
        }
        if (target.currentTarget.classList.contains('month')) {
          let endTermLen = getStrLengthInArray(terms, 0, 4)
          let endPos = endTermLen + 3
          let startTermLen = getStrLengthInArray(terms, 0, 3)
          let startPos = startTermLen + 3
          cronInput.setSelectionRange(startPos, endPos)
          state.currentUnit = 'month'
        }
        if (target.currentTarget.classList.contains('dayOfWeek')) {
          let endTermLen = getStrLengthInArray(terms, 0, 5)
          let endPos = endTermLen + 4
          let startTermLen = getStrLengthInArray(terms, 0, 4)
          let startPos = startTermLen + 4
          cronInput.setSelectionRange(startPos, endPos)
          state.currentUnit = 'dayOfWeek'
        }
      }

      function getStrLengthInArray (array, start, end) {
        return array.slice(start, end).map((elem, i) => { return elem.length }).reduce((sum, x) => sum + x)
      }
    }
  },

  UNIT_BE_SELECTED (state, target) {
    let ctl = target.currentTarget
    let startPos = ctl.selectionStart
    let endPos = ctl.selectionEnd

    let expTerms = state.cronExp.split(' ')
    let terms = expTerms.filter((term) => term.length !== 0)
    if (terms.length === 5) {
      let ranges = getStrRange(terms)
      let unit = Object.keys(CRON_SELECTED_UNIT)
      let tagList = Array.from(document.getElementsByClassName('tag'))
      for (let tag of tagList) {
        tag.classList.remove('selected')
      }
      ranges.forEach((range, i) => {
        if (startPos >= range[0] && startPos <= range[1] && endPos >= range[0] && endPos <= range[1]) {
          document.getElementsByClassName(unit[i])[0].classList.add('selected')
          state.currentUnit = unit[i]
          if (state.cronResult['status'] >= 0) helpers.translateToLanguage(state)
        }
      })
    }

    if (CRON_SPECIAL_TYPES.includes(state.cronExp)) {
      state.currentUnit = 'default'
    }

    function getStrRange (array) {
      let pos = 0
      let ranges = array.map(function (elem, i) {
        let range = [pos, pos + elem.length]
        pos = pos + elem.length
        pos += 1 // add space
        return range
      })
      return ranges
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
  cronMatch ({ commit }, payload) {
    commit('CRON_MATCH', payload.target)
  },
  selectUnit ({ commit }, payload) {
    commit('SELECT_UNIT', payload)
  },
  unitBeSelected ({ commit }, payload) {
    commit('UNIT_BE_SELECTED', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
