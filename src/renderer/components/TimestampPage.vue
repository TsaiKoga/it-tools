<template>
  <div id="timestamp-page">
    <div class="timestamp-inner">
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
          <input type="text" name="timestamp" class="timestamp-input" :value="timestampField" placeholder="Input timestamp" @input="convertToDatetime" />
          <div class="arrow">
            ⇨
          </div>
          <div class="convert-datetime-field">
            {{ datetimeResult || 'Datetime Result' }}
          </div>
        </div>
        <div class="">
        </div>
        <div class="datetime-field">
          <div class="convert-timestamp-field">
            {{ timestampResult || 'Timestamp Result' }}
          </div>
          <div class="arrow">
            ⇦
          </div>
          <input type="text" name="datetime" class="datetime-input" :value="datetimeField" placeholder="Input datetime" @input="convertToTimestamp" />
        </div>
      </div>

      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'timestamp-page',
  methods: {
    ...mapActions('TStamp', [
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
    }
  },
  computed: {
    ...mapState('TStamp', {
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
      padding: 2vh 1vw;
      width: 95vw;
    }
    .header {
      height: 25vh;
      line-height: 25vh;
      text-align: center;
    }
    .header label {
      color: white;
      font-size: 4vh;
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
      &:hover {
        background-color: #D6DBDF;
        border: 4px solid #34495E;
        color: #34495E;
      }
    }
    .header .unit {
      height: 10vh;
      font-size: 5vh;
    }
    .content {
      text-align: center;
      height: 50vh;
      padding: 0 5vw;
    }
    .content .timestamp-field,
    .content .datetime-field {
      height: 15vh;
      margin-bottom: 10vh;
      margin-right: 1vw;
      display: flex;
      display: -webkit-flex;
    }
    .content .timestamp-field .arrow,
    .content .datetime-field .arrow {
      color: white;
      flex: 1;
      -webkit-flex: 1;
      font-size: 10vh;
      line-height: 15vh;
    }
    .content .timestamp-field .timestamp-input,
    .content .datetime-field .datetime-input {
      width: 30vw;
      height: 15vh;
      padding: 0 1vw;
      font-size: 5vh;
      background-color: black;
      border: 5px solid #ddd;
      color: white;
      flex: 3;
      -webkit-flex: 3;
    }
    .content .timestamp-field .convert-datetime-field,
    .content .datetime-field .convert-timestamp-field {
      width: 30vw;
      height: 15vh;
      line-height: 13vh;
      padding: 0 1vw;
      font-size: 5vh;
      background-color: #AED6F1;
      border: 5px solid #5DADE2;
      color: #21618C;
      flex: 3;
      -webkit-flex: 3;
    }

    .footer {
      text-align: center;
    }
  }
</style>
