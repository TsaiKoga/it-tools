<template>
  <div id="timestamp-page">
    <tabs :tabsNav="tabsNav">
      <div class="timestamp-inner" v-show="currentTab === 'Home'">
        <div class="header">
          <label>Choose the unit of time: </label>
          <select class="unit" name="unit" @change="selectUnit">
            <option value=1 :selected="unit === 1" >Second</option>
            <option value=1000 :selected="unit === 1000">Micro Second</option>
          </select>
          <button type="button" name="reset" @click="resetAll">Reset</button>
        </div>

        <div class="content">
          <div class="timestamp-field">
            <div class="arrow-footer">
              <div class="arrow-part">
              </div>
            </div>
            <input type="text" name="timestamp" class="timestamp-input" :value="timestampField" placeholder="Input timestamp" @input="convertToDatetime" />
            <div class="arrow-body">
            </div>
            <div class="convert-datetime-field">
              {{ datetimeResult || 'Datetime Result' }}
            </div>
            <div class="arrow-head">
              <div class="arrow-part">
              </div>
            </div>
          </div>

          <div class="">
          </div>

          <div class="datetime-field">
            <div class="arrow-head">
              <div class="arrow-part">
              </div>
            </div>
            <div class="convert-timestamp-field">
              {{ timestampResult || 'Timestamp Result' }}
            </div>
            <div class="arrow-body">
            </div>
            <input type="text" name="datetime" class="datetime-input" :value="datetimeField" placeholder="Input datetime" @input="convertToTimestamp" />
            <div class="arrow-footer">
              <div class="arrow-part">
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
        </div>
      </div>

      <div class="timestamp-inner" v-show="currentTab !== 'Home'">
        <tstamp-help></tstamp-help>
      </div>
    </tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tabs from './../Tabs'
import TstampHelp from './TimestampPage/TstampHelp'

export default {
  name: 'timestamp-page',
  components: {
    'tabs': Tabs,
    'tstamp-help': TstampHelp
  },
  methods: {
    ...mapActions('TStamp', [
      'setNav',
      'resetInput',
      'setUnit',
      'timestampConvert',
      'datetimeConvert'
    ]),
    resetAll () {
      this.resetInput()
    },
    selectUnit (event) {
      this.setUnit(event)
    },
    convertToDatetime (event) {
      this.timestampConvert(event)
    },
    convertToTimestamp (event) {
      this.datetimeConvert(event)
    },
    updateNav (title, index) {
      this.setNav({ title: title, index: index })
    }
  },
  computed: {
    ...mapState('TStamp', {
      tabsNav: state => state.tabs,
      currentTab: state => state.currentTab,
      unit: state => state.unit,
      datetimeResult: state => state.datetimeResult,
      timestampResult: state => state.timestampResult,
      timestampField: state => state.timestampField,
      datetimeField: state => state.datetimeField})
  }
}
</script>

<style lang="scss" scoped>
  /* CSS */
  #timestamp-page {
    width: 95vw;
    padding: 10px;
    height: 100vh;
    background: #232323;
    text-align: center;
    font-family: futura,helvetica,arial;
    display: -webkit-flex;
    display: flex;
    margin-left: 5vw;
    .timestamp-inner {
      border: 20px solid #e6e6e6;
      background-color: #7B7D7D;
      padding-right: 15px;
      margin-left: auto;
      margin-right: auto;
      -webkit-flex: 1;
      flex: 1;
      padding: 2vh 5vw;
      width: 93vw;
    }
    .header {
      height: 25vh;
      line-height: 25vh;
      text-align: center;
      display: flex;
      display: -webkit-flex;
      -webkit-align-items: center;
        align-items: center;
      -webkit-justify-content: center;
              justify-content: center;
    }
    .header label {
      color: white;
      font-size: 4vh;
      margin-right: 1vw;
    }
    .header button[name='reset'] {
      height: 10vh;
      font-size: 5vh;
      background-color: #5D6D7E;
      color: white;
      padding: 0 2vw;
      margin-left: 1vw;
      border-radius: 10px;
      border: 4px solid white;
      cursor: pointer;
      &:hover {
        background-color: #D6DBDF;
        border: 4px solid #34495E;
        color: #34495E;
      }
    }
    .header .unit {
      height: 10vh;
      font-size: 1em;
      width: 15vw;
      margin-right: 5vw;
    }
    .content {
      text-align: center;
      height: 50vh;
      padding: 0 2vw;
    }
    .content .timestamp-field,
    .content .datetime-field {
      height: 15vh;
      margin-bottom: 10vh;
      margin-right: 1vw;
      display: flex;
      display: -webkit-flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
    }

    .content .timestamp-field .arrow-body,
    .content .datetime-field .arrow-body {
      background: #00b1d1;
      border-color: #00b1d1;
      flex: 1;
      -webkit-flex: 1;
      line-height: 12vh;
      height: 12vh;
    }
    .content .timestamp-field .arrow-head {
      background: #00b1d1;
      border-color: #00b1d1;
      width: 5vw;
      height: 12vh;
    }
    .content .timestamp-field .arrow-head .arrow-part::after {
      margin-left: 5vw;
      border-top-color: transparent;
      border-right-color: #00b1d1;
      border-bottom-color: transparent;
      border-left-color: #00b1d1;
      border-width: 6vh 0 6vh 5vw;
      border-style: solid;
      top: 0;
      content: '';
      display: block;
    }
    .content .timestamp-field .arrow-footer {
      background: #00b1d1;
      border-color: #00b1d1;
      width: 5vw;
      height: 12vh;
      position: relative;
    }
    .content .timestamp-field .arrow-footer .arrow-part::after {
      content: '';
      display: block;
      border-style: solid;
      border-color: #00b1d1;
      border-top-color: #00b1d1;
      border-width: 6vh 0 6vh 5vw;
      border-left-color: transparent;
      position: absolute;
      left: -5vw;

    }
    .content .datetime-field .arrow-head {
      background: #00b1d1;
      border-color: #00b1d1;
      width: 5vw;
      height: 12vh;
      position: relative;
    }
    .content .datetime-field .arrow-head .arrow-part::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -5vw;
      border-top-color: transparent;
      border-right-color: #00b1d1;
      border-bottom-color: transparent;
      border-left-color: #00b1d1;
      border-width: 6vh 5vw 6vh 0;
      border-style: solid;
      content: '';
      display: block;
    }
    .content .datetime-field .arrow-footer {
      background: #00b1d1;
      border-color: #00b1d1;
      width: 5vw;
      height: 12vh;
    }
    .content .datetime-field .arrow-footer .arrow-part::after {
      content: '';
      display: block;
      border-style: solid;
      border-color: #00b1d1;
      border-width: 6vh 5vw 6vh 0;
      border-right-color: transparent;
      margin-left: 5vw;
    }

    .content .timestamp-field .timestamp-input,
    .content .datetime-field .datetime-input {
      -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.14);
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.14);
      border-radius: 2px;
      background: #fff;
      color: #00b1d1; // 蓝色
      border: none;
      width: 25vw;
      height: 15vh;
      padding: 0 1vw;
      font-size: 1.5em;
      flex: 3;
      text-align: center;
      -webkit-flex: 3;
      &:focus {
        outline: none;
      }
    }
    .content .timestamp-field .convert-datetime-field,
    .content .datetime-field .convert-timestamp-field {
      -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.14);
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.14);
      border-radius: 2px;
      background: #fff;
      width: 25vw;
      height: 15vh;
      line-height: 15vh;
      padding: 0 1vw;
      font-size: 1.5em;
      color: #f90;
      flex: 3;
      -webkit-flex: 3;
    }

    .footer {
      text-align: center;
    }
  }
</style>
