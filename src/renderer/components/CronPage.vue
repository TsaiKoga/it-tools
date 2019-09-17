<template>
  <div id="cron-page">
    <tabs :tabsNav="tabsNav">
      <div class="cron-inner" v-show="currentTab === $t('tabs.home')">
        <div class="cron-top">
          <div class="cron-top-label">
            <label>{{ $t('cron.yourCronExp') }}:</label>
          </div>
          <div class="cron-field">
            <input type="text" name="cron-exp" @input="execCron" @mouseup="termSelected" @keyup="termSelected" :value='cronExp' />
          </div>
          <div class="cron-tags-group">
            <span class="tag min" @click='selectTerm'>{{ $t('cronHelp.minute') }}</span>
            <span class="tag hour" @click='selectTerm'>{{ $t('cronHelp.hour') }}</span>
            <span class="tag dayOfMonth" @click='selectTerm'>
              <div>{{ $t('cronHelp.day') }}</div>
              <div>({{ $t('cronHelp.month') }})</div>
            </span>
            <span class="tag month" @click='selectTerm'>{{ $t('cronHelp.month') }}</span>
            <span class="tag dayOfWeek" @click='selectTerm'>
              <div>{{ $t('cronHelp.day') }}</div>
              <div>({{ $t('cronHelp.week') }})</div>
            </span>
          </div>
        </div>

        <div class="cron-bottom">
          <div class="date-list">
            <label>{{ $t('cron.nextExec') }}</label>
            <input type="number" name="max-count" @input="execCron" :value='dateMaxCount' min=1 max=200 class="max-count" />
            <label class="times">{{ $t('cron.times') }}:</label>
            <ul>
              <li v-for="(item, i) in cronResult['list']" v-if="cronResult['status'] > 0">{{ i + 1 }}: {{ item }}</li>
              <li v-if="cronResult['status'] < 0">{{ cronResult['content'] }}</li>
            </ul>
          </div>

          <div class="cron-bottom-right">
            <div class="cron-bottom-top">
              <table>
                <tr v-for="(term, i) in termOptions[currentUnit]">
                  <th>{{ term['symbol'] }}</th>
                  <td>{{ term['explaination'] }}</td>
                </tr>
              </table>
            </div>
            <div class="cron-bottom-content">
              {{ cronResult['content'] }}
            </div>
          </div>
        </div>
      </div>

      <div class="cron-inner" v-show="currentTab !== $t('tabs.home')">
        <cron-help></cron-help>
      </div>
    </tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tabs from './../Tabs'
import cronHelp from './cronPage/cronHelp'

export default {
  name: 'cron-page',
  components: {
    'tabs': Tabs,
    'cron-help': cronHelp
  },
  computed: {
    ...mapState('Cron', {
      tabsNav: state => state.tabs,
      currentTab: state => state.currentTab,
      cronExp: state => state.cronExp,
      dateMaxCount: state => state.dateMaxCount,
      cronResult: state => state.cronResult,
      termOptions: state => state.termOptions,
      currentUnit: state => state.currentUnit
    })
  },
  methods: {
    ...mapActions('Cron', [
      'setNav',
      'cronMatch',
      'setInitState',
      'selectUnit',
      'unitBeSelected'
    ]),
    execCron (event) {
      this.cronMatch(event)
    },
    updateNav (title, index) {
      this.setNav({ title: title, index: index })
    },
    setInitStateLang () {
      if (this.$store.state.Cron.tabs[0]['title'] !== this.$i18n.t('tabs.home')) {
        let payload = {}
        payload.tabs = [
          { title: this.$i18n.t('tabs.home'), isActive: true },
          { title: this.$i18n.t('tabs.help'), isActive: false }
        ]
        payload.currentTab = this.$i18n.t('tabs.home')
        this.setInitState(payload)
      }
    },
    selectTerm (event) {
      this.selectUnit(event)
    },
    termSelected (event) {
      this.unitBeSelected(event)
    }
  },
  mounted () {
    this.setInitStateLang()
  },
  updated () {
    this.setInitStateLang()
  }
}
</script>

<style lang="scss" scoped>
  $white-font-color: #ffffff;
  $page-bg-color: #232323;      // dark

  $inner-border-color: #e6e6e6; // silver
  $inner-bg-color: #4C405A;
  $inner-font-color: #ffffff;

  $input-border-color: #cccccc;
  $black-bg-color: #333333;
  $input-font-color: #ffffff;
  $input-font-family: "Courier New", Courier, monospace;
  $input-selected-color: #ffff80;
  $input-selected-bg: rgba(255, 255, 128, 0.2);

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
  #cron-page {
    @extend %flex-layout;
    padding: 10px;
    background: $page-bg-color;
    text-align: center;
    font-family: futura,helvetica,arial;
    height: 100vh;
    width: 93vw;
    margin-left: 7vw;
  }
  .cron-inner {
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
  label {
    letter-spacing: 1px;
    font-size: 1em;
    height: 4vh;
    display: block;
    margin-bottom: 1vh;
  }
  .cron-field {
    @extend %flex-layout;
    height: 15vh;
  }
  .cron-field input {
    font-family: $input-font-family;
    text-align: center;
    font-size: 250%;
    width: 100%;
    background-color: $black-bg-color;
    border: 1px solid $input-border-color;
    border-radius: 0.6em;
    color: $input-font-color;
    padding-top: 0.075rem;
    outline: none;
  }
  .cron-field input.invalid {
    border: 1px solid darkred;
  }
  .cron-field input::selection {
    color: $input-selected-color;
    background-color: $input-selected-bg;
  }
  .cron-tags-group {
    text-align: center;
    display: flex;
    padding: 5px;
    justify-content: center;
    margin-bottom: 1vh;
  }
  .cron-tags-group .tag {
    word-break: break-all;
    cursor: pointer;
    padding: 0.1em 0.36em;
  }
  .cron-tags-group .tag.selected {
    color: $input-selected-color;
  }
  .cron-tags-group .tag div {
  }
  .cron-bottom {
    display: flex;
    justify-content: space-around;
  }
  .cron-bottom .date-list {
    width: 40vw;
    height: 52vh;
  }
  .cron-bottom .date-list label {
    display: inline-block;
    margin-left: 0;
    margin-bottom: 2vh;
  }
  .cron-bottom .date-list label.times {
    margin-left: 0.5vw;
  }
  .cron-bottom .date-list .max-count {
    display: inline-block;
    outline: none;
    background-color: $black-bg-color;
    color: $input-font-color;
    padding: 0;
    height: 5vh;
    width: 5vw;
    text-align: center;
    border-radius: 5px;
    font-size: 1em;
    border: 1px solid $input-border-color;
  }
  .cron-bottom .date-list ul {
    list-style: none;
    overflow-y: scroll;
    height: 45vh;
    background-color: $black-bg-color;
    color: $input-font-color;
    outline: none;
    border-radius: 0.6em;
    border: 1px solid $input-border-color;
    margin-bottom: 2vh;
  }
  .cron-bottom .date-list ul li {
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-right: 2vw;
    padding: 1vh 1vw;
  }
  .cron-bottom .cron-bottom-right {
    width: 40vw;
    height: 52vh;
  }
  .cron-bottom .cron-bottom-right table {
    width: 40vw;
    border-top: 1px solid $input-border-color;
    border-bottom: 1px solid $input-border-color;
    border-spacing: 2px;
  }
  .cron-bottom .cron-bottom-right table tr {
    display: table-row;
    border-top: 1px solid $input-border-color;
    border-bottom: 1px solid $input-border-color;
  }
  .cron-bottom .cron-bottom-right table th,
  .cron-bottom .cron-bottom-right table td {
    padding: 0 2vw;
  }
  .cron-bottom .cron-bottom-right .cron-bottom-content {
    padding-top: 2vh;
    font-size: 1.5em;
  }
</style>
