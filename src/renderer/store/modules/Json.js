const state = {
  jsonStr: '',
  jsonResult: '',
  jsonHtml: '',
  error: { 'code': 0, 'msg': '' },
  isXML: false
}

const ESCAPE_SYM = [
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['&nbsp', '&amp;nbsp'],
  ['&quot', '&amp;quot']
]

const mutations = {
  SET_JSON_TEXT (state, value) {
    state.jsonStr = value
  },

  CONVERT_JSON (state) {
    let i = 0
    let indentInit = 0
    let indentSym = '&nbsp;'
    let indentCount = 4

    state.error = { 'code': 0, 'msg': '' }
    state.jsonResult = parseValue()
    state.jsonHtml = renderHtml(state.jsonResult, indentInit)
    state.isXML = false

    function escapeString (txt) {
      ESCAPE_SYM.forEach((symItem) => {
        let rex = new RegExp(symItem[0], 'g')
        txt = txt.replace(rex, symItem[1])
      })
      return txt
    }

    function unicodeToChinese (str) {
      return unescape(str.replace(/\\u/g, '%u'))
    }

    function renderHtml (result, indtIndx) {
      let rsltHtml = ''
      let indentI = indtIndx + 1
      if (state.error['code'] === -1) {
        rsltHtml = '<div class="error">Error:</div> <div class="error-msg">' + state.error['msg'] + '</div><div class="error-pos-msg">This error occured near <p>' + state.error['posMsg'] + '</p> </div>'
      } else if (Array.isArray(result)) {
        let arrayHtml = ''
        let arrayItemCount = 0
        result.forEach((item, index) => {
          arrayItemCount++
          let itemHtml = ''
          if (typeof item === 'number') {
            if (index < (result.length - 1)) {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-number">' + item + '</span>,<br>'
            } else {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-number">' + item + '</span><br>'
            }
          } else if (typeof item === 'string') {
            if (index < (result.length - 1)) {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-string">"' + unicodeToChinese(item) + '"</span>,<br>'
            } else {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-string">"' + unicodeToChinese(item) + '"</span><br>'
            }
          } else if (typeof item === 'boolean') {
            if (index < (result.length - 1)) {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-boolean">"' + item + '"</span>,<br>'
            } else {
              itemHtml = indentSym.repeat(indentCount * indentI) + '<span class="json-boolean">"' + item + '"</span><br>'
            }
          } else {
            if (index < (result.length - 1)) {
              itemHtml = indentSym.repeat(indentCount * indentI) + renderHtml(item, indentI) + ',<br>'
            } else {
              itemHtml = indentSym.repeat(indentCount * indentI) + renderHtml(item, indentI) + '<br>'
            }
          }
          arrayHtml += itemHtml
        })
        rsltHtml = '<span class="foldOn" data-type="array">[<span class="foldBtn foldBtnOn" @click="foldJson"></span><br>' + arrayHtml + indentSym.repeat(indentCount * indtIndx) + ']</span><span class="foldOff" style="display:none;">[<span class="foldBtn fold-marker" @click="foldJson">Array[' + arrayItemCount + '] ↔</span>]</span>'
      } else if (typeof result === 'object') {
        let resultKeyVal = ''
        for (let index = 0; index < Object.entries(result).length; index++) {
          // deal with key
          let keyval = Object.entries(result)[index]
          let resultKey
          // if (typeof keyval[0] === 'number' || (keyval[0] === '0')) {
          if (typeof keyval[0] === 'number') {
            return 'Error!'
          } else {
            resultKey = indentSym.repeat(indentCount * indentI) + '<span class="json-key">"' + unicodeToChinese(escapeString(keyval[0])) + '"</span>:'
          }

          // deal with value
          let resultVal
          if (typeof keyval[1] === 'number') {
            if (index < (Object.entries(result).length - 1)) {
              resultVal = '<span class="json-number">' + keyval[1] + '</span>,<br>'
            } else {
              resultVal = '<span class="json-number">' + keyval[1] + '</span><br>'
            }
          } else if (typeof keyval[1] === 'string') {
            if (index < (Object.entries(result).length - 1)) {
              resultVal = '<span class="json-string">"' + unicodeToChinese(escapeString(keyval[1])) + '"</span>,<br>'
            } else {
              resultVal = '<span class="json-string">"' + unicodeToChinese(escapeString(keyval[1])) + '"</span><br>'
            }
          } else {
            if (index < (Object.entries(result).length - 1)) {
              resultVal = renderHtml(keyval[1], indentI) + ',<br>'
            } else {
              resultVal = renderHtml(keyval[1], indentI) + '<br>'
            }
          }

          // adding ',' if it's not the last key-val
          resultKeyVal += (resultKey + resultVal)
        }
        rsltHtml = '<span class="foldOn" data-type="object">{<span class="foldBtn foldBtnOn" @click="foldJson"></span><br>' + resultKeyVal + indentSym.repeat(indentCount * indtIndx) + '}</span><span class="foldOff" style="display:none;">{</i><span class="foldBtn fold-marker" @click="foldJson">Object ↔</span>}</span>'
      } else if (typeof result === 'boolean') {
        rsltHtml = '<span class="json-boolean">' + result + '</span>'
      } else {
        return rsltHtml
      }
      return rsltHtml
    }

    function parseValue (isKey = false) {
      // while (/[ \n\r\t\b]/.test(state.jsonStr[i])) {
      //   i++ // 跳过空白
      // }
      skipSpace()
      if (isKey) {
        if (state.jsonStr[i] === `"`) {
          i++
          return parseString()
        } else {
          return undefined
        }
      } else {
        for (; i < state.jsonStr.length; i++) {
          if (state.jsonStr[i] === `{`) {
            i++
            return parseObject()
          }
          if (state.jsonStr[i] === `[`) {
            i++
            return parseArray()
          }
          if (state.jsonStr[i] === `"`) {
            i++
            return parseString()
          }
          if (state.jsonStr[i] === `t` || state.jsonStr[i] === `f`) {
            return parseBoolean()
          }
          if (state.jsonStr[i] === `n`) {
            i = i + 4
            return null
          }
          if (/[0-9.e\-+]/i.test(state.jsonStr[i])) {
            return parseNumber()
          } else {
            return undefined
          }
        }
      }
    }

    function parseObject () {
      let res = {}
      let value
      while (state.jsonStr[i] !== `}` && i < state.jsonStr.length) {
        let comma = false

        let key = parseValue(true)
        if (key === undefined) return errorTermination('the Key is undefined.')
        skipSpace()
        if (state.jsonStr[i] !== `:`) return errorTermination('missing : ')
        i++ // 跳过`:`
        value = parseValue()
        if (value === undefined) return errorTermination('the value is undefined.')
        res[key] = value
        skipSpace()
        while (/[ ,]/.test(state.jsonStr[i]) && i < state.jsonStr.length - 1) {
          comma = true
          i++ // 跳过`,`
        }
        skipSpace()
        if (state.jsonStr[i] === `}` && comma) return errorTermination('missing key-value after comma.')
        if (state.jsonStr[i] !== `}` && !comma) return errorTermination('missing comma: ,')
      }

      if (state.jsonStr[i] !== `}`) return errorTermination('missing } ...')
      i++ // 跳过“}”
      return res
    }

    function parseArray () {
      let res = []
      let value
      while (state.jsonStr[i] !== `]` && i < state.jsonStr.length - 1) {
        let comma = false

        value = parseValue()
        res.push(value)
        skipSpace()
        while (/[ ,]/.test(state.jsonStr[i]) && i < state.jsonStr.length - 1) {
          comma = true
          i++ // 跳过`,`
        }
        skipSpace()
        if (state.jsonStr[i] === `]` && comma) return errorTermination('missing element in array.')
        if (state.jsonStr[i] !== `]` && !comma) return errorTermination('missing comma in array.')
        if (/[ ,]/.test(state.jsonStr[i]) === false && value === undefined) return errorTermination('the element is undefined...')
      }
      if (state.jsonStr[i] !== `]`) return errorTermination('missing ] ...')
      i++ // 跳过结束“]”
      return res
    }

    function parseString () {
      /**
       * 直接获取到这串字符串 key 或 value
       */
      let res = ``
      let j = i
      while ((state.jsonStr[i] !== `"` || (state.jsonStr[i] === `"` && state.jsonStr[i - 1] === `\\`)) && i < state.jsonStr.length) {
        i++
      }
      res = state.jsonStr.slice(j, i)
      if (state.jsonStr[i] !== `"`) return errorTermination('missing " ')
      i++ // 跳过字符串结尾引号结束`"`
      return res
    }

    function parseBoolean () {
      if (state.jsonStr[i] === `t` && i < state.jsonStr.length) {
        if ((i + 3) < state.jsonStr.length && state.jsonStr[i + 1] === `r` && state.jsonStr[i + 2] === `u` && state.jsonStr[i + 3] === `e`) {
          i = i + 4
          return true
        } else {
          return 'Error: It\'s not Boolean'
        }
      } else {
        if ((i + 4) < state.jsonStr.length && state.jsonStr[i + 1] === `a` && state.jsonStr[i + 2] === `l` && state.jsonStr[i + 3] === `s` && state.jsonStr[i + 4] === `e`) {
          i = i + 5
          return false
        } else {
          return 'Error: It\'s not Boolean'
        }
      }
    }

    function parseNumber () {
      let res = ``
      let j = i
      while (/[0-9.e\-+]/i.test(state.jsonStr[i]) && i < state.jsonStr.length) {
        i++
      }
      res = Number(state.jsonStr.slice(j, i))
      if (isNaN(res)) return errorTermination('it\'s not number...')
      return res
    }

    function skipSpace () {
      while (/\s/.test(state.jsonStr[i]) && i < state.jsonStr.length - 1) {
        i++ // 跳过空白
      }
    }

    function errorPosMsg () {
      let strPosMsg = state.jsonStr.slice(0, i)
      return strPosMsg
    }

    function errorTermination (msg) {
      state.error = {'code': -1, 'posMsg': errorPosMsg(), 'msg': 'It seems that ' + msg}
      return state.error
    }
  },

  JSON_TO_XML (state) {
    let indentInit = 0
    let indentSym = '&nbsp;'
    let indentCount = 2
    let result = state.jsonResult

    state.jsonHtml = '&lt;?xml version=<span class="xml-string">"1.0"</span> encoding=<span class="xml-string">"UTF-8"</span>?&gt;&lt;root&gt;<br/>'
    state.jsonHtml += renderXML(result, indentInit)
    state.jsonHtml += '&lt;/root&gt;'
    state.isXML = true

    function renderXML (jsonResult, indtIndx) {
      let xmlResult = ''
      let indentI = indtIndx + 1
      if (Array.isArray(jsonResult)) {
        jsonResult.forEach((item, index) => {
          if (typeof item === 'object' || Array.isArray(item)) {
            xmlResult += ('<br/>' + indentSym.repeat(indentCount * indentI) + '&lt;' + index + '&gt;<br>')
            xmlResult += renderXML(item, indentI)
            xmlResult += (indentSym.repeat(indentCount * indentI) + '&lt;/' + index + '&gt;<br>')
          } else {
            xmlResult += (indentSym.repeat(indentCount * indentI) + '&lt;' + index + '&gt;')
            xmlResult += ('<span class="xml-val">' + item + '</span>')
            xmlResult += ('&lt;/' + index + '&gt;<br>')
          }
        })
      } else if (typeof jsonResult === 'object') {
        for (let index = 0; index < Object.entries(jsonResult).length; index++) {
          let keyval = Object.entries(jsonResult)[index]
          xmlResult += (indentSym.repeat(indentCount * indentI) + '&lt;' + keyval[0] + '&gt;')
          if (typeof keyval[1] === 'object' || Array.isArray(keyval[1])) {
            xmlResult += '<br>'
            xmlResult += renderXML(keyval[1], indentI)
            xmlResult += (indentSym.repeat(indentCount * indentI) + '&lt;/' + keyval[0] + '&gt;<br>')
          } else {
            xmlResult += ('<span class="xml-val">' + keyval[1] + '</span>')
            xmlResult += ('&lt;/' + keyval[0] + '&gt;<br>')
          }
        }
      } else {
        xmlResult = jsonResult
      }
      return xmlResult
    }
  }
}

const actions = {
  setJsonText ({ commit }, value) {
    commit('SET_JSON_TEXT', value)
  },
  convertJson ({ commit }) {
    commit('CONVERT_JSON')
  },
  jsonToXML ({ commit }) {
    commit('JSON_TO_XML')
  }
}

export default {
  state,
  mutations,
  actions
}
