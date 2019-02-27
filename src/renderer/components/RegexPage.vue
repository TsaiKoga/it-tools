<template>
  <div id="regex-page">
    <div class="regex-inner">
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
              <span v-for="(cont, indx) in regexResult['matchContext']" :class="indx%2 !== 0 ? 'match' : null">{{ cont }}</span>
            </div>
          </div>
          <ul v-for="(itemGroup, index) in regexResult['content']">
            <li>
              <div>
                <label>Match Group {{ index + 1 }}:</label>
                <div class="result-item">
                  <ul v-for="(item, i) in itemGroup">
                    <li v-if="i !== 0">{{ i }}: {{ item }}</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="result-content result-not-match" v-if="regexResult['status'] == -1">
          {{ regexResult['content'] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'regex-page',
  computed: {
    ...mapState('Regex', {
      regexExp: state => state.regexExp,
      regexOpt: state => state.regexOpt,
      regexCont: state => state.regexCont,
      regexResult: state => state.regexResult})
  },
  methods: {
    ...mapActions('Regex', [
      'cleanFields',
      'regexMatch'
    ]),
    cleanAllFields () {
      this.cleanFields()
    },
    execRegex (event) {
      this.regexMatch(event)
    }

  }

}
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body { font-family: 'Source Sans Pro', sans-serif; }
  /* CSS */
  #regex-page {
    padding: 10px;
    background: #232323;
    text-align: center;
    display: -webkit-flex;
    display: flex;
    font-family: futura,helvetica,arial;
    height: 100vh;
    width: 95vw;
    margin-left: 5vw;
  }
  .regex-inner {
    text-align: left;
    border: 20px solid #e6e6e6;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    background-color: #4A708B;
    color: #fff;
    -webkit-flex: 1;
    flex: 1;
    padding: 2vh 1vw;
    width: 95vw;
  }
  .regex-top {
    height: 15vh;
  }
  .regex-top-fields {
    display: flex;
    display: -webkit-flex;
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
    font-size: 5vh;
    color: white;
    margin: 0;
    flex: 1;
    text-align: center;
    line-height: 9vh;
  }
  .regex-diagnoal-input {
    flex: 19;
    margin: auto;
  }
  .regex-top input[name=regex-exp] {
    height: 9vh;
    width: 74vw;
    padding: 0 1vw;
    font-size: 5vh;
    background-color: black;
    border: 1px solid #ddd;
    color: white;
  }
  .regex-top input[name=regex-opt] {
    height: 9vh;
    width: 10vw;
    padding: 0 1vw;
    font-size: 5vh;
    background-color: black;
    border: 1px solid #ddd;
    color: white;
  }

  .regex-bottom {
    padding-top: 3vh;
    height: 74vh;
  }
  .regex-bottom {
    display: -webkit-flex;
    display: flex;
  }
  .regex-bottom .regex-match-btn {
    display: -webkit-flex;
    display: flex;
  }
  .regex-bottom .regex-match-btn label {
    flex: 2;
    -webkit-flex: 2;
  }
  .regex-bottom .regex-match-btn .clean-fields {
    flex: 1;
    -webkit-flex: 1;
    margin-right: 1vw;
    background-color: #6e6e6e;
    color: white;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    border: 1px solid white;
    font-size: 1em;
    border-radius: 5px;
    margin-bottom: 5px;
    &:hover {
      border: 1px solid #6e6e6e;
      background: white;
      color: #6e6e6e;
    }
  }
  .regex-bottom .regex-textarea {
    height: 60vh;
    width: 40vw;
    padding: 1vh 1vw;
    font-size: 3vh;
    background-color: black;
    color: white;
    margin-left: 2vw;
  }
  .regex-content {
    display: inline-block;
    -webkit-flex: 1;
    flex: 1;
  }
  .result-content {
    display: inline-block;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    margin-top: 5vh;
    height: 60vh;
  }
  .result-init {
    border: 10px solid #779a73;
    background-color: #cdf3c9;
    color: #283a26;
    line-height: 60vh;
  }
  .result-not-match {
    border: 10px solid #EEA2AD;
    background-color: #EED5D2;
    color: #EE6A50;
    line-height: 60vh;
  }
  .result-match {
    text-align: left;
    overflow-y: scroll;
    ul {
      list-style: none;
    }
    .result-item {
      white-space: pre-wrap;
      word-wrap: break-word;
      border: 1px solid #ddd;
      padding: 15px;
      background-color: #000;
      color: #fff;
      margin-bottom: 10px;
    }
    span {
      display: inline;
      margin: 0;
      padding: 0;
    }
    .match {
      padding: 2px;
      color: #0066b3;
      background-color: #bfe4ff;
    }
  }
</style>
