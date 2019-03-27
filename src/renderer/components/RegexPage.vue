<template>
  <div id="regex-page">
    <tabs :tabsNav="tabsNav">
      <div class="regex-inner" v-show="currentTab === 'Home'">
        <div class="regex-top">
          <div class="regex-top-label">
            <label>Your regular expression:</label>
          </div>
          <div class="regex-top-fields">
            <div class="regex-diagonal">/</div>
            <div class="regex-diagnoal-input">
              <input type="text" name="regex-exp" @input='execRegex' :value='regexExp' />
            </div>

            <div class="regex-diagonal">/</div>
            <div>
              <input type="text" name="regex-opt" @input="execRegex" :value="regexOpt" />
            </div>
          </div>

        </div>

        <div class="regex-bottom">
          <div class="regex-content">
            <label>Your test string: </label>
            <textarea class="regex-textarea" name="regex-content" @input="execRegex" :value='regexCont'></textarea>
          </div>

          <div class="result-content result-init" v-if="regexResult['status'] == 0">
            {{ regexResult['content'] }}
          </div>


          <div class="result-content result-match" v-if="regexResult['status'] == 1">
            <div>
              <div class="regex-match-btn">
                <label>Match Result:</label>
                <a href="javascript:void(0)" class="clean-fields" @click="cleanAllFields">Clean Fields</a>
              </div>
              <div class="result-item">
                <span v-for="(cont, indx) in regexResult['matchedContext']" :class="indx%2 !== 0 ? 'match' : null">{{ cont }}</span>
              </div>
            </div>
            <ul v-if="regexResult['content'].length > 0">
              <label>Match Groups:</label>
              <div class="match-groups">
                <li v-for="(itemGroup, index) in regexResult['content']">
                  <div class="group-item">
                    <label>Match Group {{ index + 1 }}:</label>
                    <ul>
                      <li v-if="i !== 0" v-for="(item, i) in itemGroup">{{ i }}: {{ item }}</li>
                    </ul>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          <div class="result-content result-not-match" v-if="regexResult['status'] == -1">
            {{ regexResult['content'] }}
          </div>
        </div>
      </div>

      <div class="regex-inner" v-show="currentTab !== 'Home'">
        <regex-help></regex-help>
      </div>
    </tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tabs from './../Tabs'
import RegexHelp from './RegexPage/RegexHelp'

export default {
  name: 'regex-page',
  components: {
    'tabs': Tabs,
    'regex-help': RegexHelp
  },
  computed: {
    ...mapState('Regex', {
      tabsNav: state => state.tabs,
      currentTab: state => state.currentTab,
      regexExp: state => state.regexExp,
      regexOpt: state => state.regexOpt,
      regexCont: state => state.regexCont,
      regexResult: state => state.regexResult})
  },
  methods: {
    ...mapActions('Regex', [
      'setNav',
      'cleanFields',
      'regexMatch'
    ]),
    cleanAllFields () {
      this.cleanFields()
    },
    execRegex (event) {
      this.regexMatch(event)
    },
    updateNav (title, index) {
      this.setNav({ title: title, index: index })
    }

  }

}
</script>

<style lang="scss" scoped>
  $white-font-color: #ffffff;
  $page-bg-color: #232323;      // dark

  $inner-border-color: #e6e6e6; // silver
  $inner-bg-color: #4A708B;
  $inner-font-color: #ffffff;

  $clear-btn-font-border-color: #6e6e6e;

  $result-init-border-color: #779a73;
  $result-init-bg-color: #cdf3c9;
  $result-init-font-color: #283a26;

  $result-not-match-border-color: #EEA2AD;
  $result-not-match-font-color: #EE6A50;
  $result-not-match-bg-color: #EED5D2;

  $input-border-color: #dddddd;
  $macth-group-label-color: #84bde7;
  $match-font-color: #0066b3;
  $match-bg-color: #bfe4ff;
  $black-bg-color: #000000;

  %flex-layout {
    display: -webkit-flex;
    display: flex;
  }
  %flex-1 {
    flex: 1;
    -webkit-flex: 1;
  }
  %flex-2 {
    flex: 2;
    -webkit-flex: 2;
  }
  %margin-center {
    margin-left: auto;
    margin-right: auto;
  }
  %input-color-style {
    color: $white-font-color;
    background-color: $black-bg-color;
  }
  %input-top-style {
    @extend %input-color-style;
    height: 9vh;
    padding: 0 1vw;
    font-size: 5vh;
    border: 1px solid $input-border-color;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body { font-family: 'Source Sans Pro', sans-serif; }
  /* CSS */
  #regex-page {
    @extend %flex-layout;
    padding: 10px;
    background: $page-bg-color;
    text-align: center;
    font-family: futura,helvetica,arial;
    height: 100vh;
    width: 93vw;
    margin-left: 7vw;
  }
  .regex-inner {
    @extend %flex-1;
    @extend %margin-center;
    text-align: left;
    border: 20px solid $inner-border-color;
    background-color: $inner-bg-color;
    color: $inner-font-color;
    padding-right: 15px;
    padding: 2vh 1vw;
    width: 91vw;
  }
  .regex-top {
    height: 15vh;
  }
  .regex-top-fields {
    @extend %flex-layout;
  }
  label {
    letter-spacing: 1px;
    font-size: 1em;
    height: 4vh;
    display: block;
    margin-left: 2vw;
    margin-bottom: 1vh;
  }
  .regex-diagonal {
    @extend %flex-1;
    font-size: 5vh;
    color: $white-font-color;
    margin: 0;
    text-align: center;
    line-height: 9vh;
  }
  .regex-diagnoal-input {
    flex: 19;
    margin: auto;
  }
  .regex-top input[name=regex-exp] {
    width: 72vw;
    @extend %input-top-style;
  }
  .regex-top input[name=regex-opt] {
    width: 10vw;
    @extend %input-top-style;
  }

  .regex-bottom {
    padding-top: 3vh;
    height: 64vh;
  }
  .regex-bottom {
    @extend %flex-layout;
  }
  .regex-bottom .regex-match-btn {
    @extend %flex-layout;
  }
  .regex-bottom .regex-match-btn label {
    @extend %flex-2;
  }
  .regex-bottom .regex-match-btn .clean-fields {
    @extend %flex-1;
    margin-right: 1vw;
    background-color: $clear-btn-font-border-color;
    color: $white-font-color;
    border: 1px solid $white-font-color;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    font-size: 0.9em;
    height: 4vh;
    line-height: 4vh;
    border-radius: 5px;
    margin-bottom: 5px;
    &:hover {
      border: 1px solid $clear-btn-font-border-color;
      color: $clear-btn-font-border-color;
      background: white;
    }
  }
  .regex-bottom .regex-textarea {
    @extend %input-color-style;
    height: 55vh;
    width: 40vw;
    padding: 1vh 1vw;
    font-size: 3vh;
    margin-left: 2vw;
  }
  .regex-content {
    display: inline-block;
    @extend %flex-1;
  }
  .result-content {
    @extend %flex-1;
    display: inline-block;
    text-align: center;
    margin-top: 5vh;
    height: 55vh;
  }
  .result-init {
    border: 10px solid $result-init-border-color;
    background-color: $result-init-bg-color;
    color: $result-init-font-color;
    line-height: 55vh;
  }
  .result-not-match {
    border: 10px solid $result-not-match-border-color;
    background-color: $result-not-match-bg-color;
    color: $result-not-match-font-color;
    line-height: 55vh;
  }
  .result-match {
    text-align: left;
    overflow-y: scroll;
    ul {
      list-style: none;
      .match-groups {
        @extend %input-color-style;
        white-space: pre-wrap;
        word-wrap: break-word;
        border: 1px solid $input-border-color;
        padding: 15px;
        margin-bottom: 10px;
      }
      .match-groups label {
        font-family: futura,helvetica,arial;
        font-variant: small-caps;
        color: $macth-group-label-color;
        font-size: 12px;
        margin: 0;
        height: 0vh;
      }
      .match-groups .group-item {
        font-size: 0.9em;
        margin-bottom: 2vh;
      }
    }
    .result-item {
      @extend %input-color-style;
      white-space: pre-wrap;
      word-wrap: break-word;
      border: 1px solid $input-border-color;
      padding: 15px;
      margin-bottom: 10px;
    }
    span {
      display: inline;
      margin: 0;
      padding: 0;
    }
    .match {
      padding: 2px;
      color: $match-font-color;
      background-color: $match-bg-color;
    }
  }
</style>
