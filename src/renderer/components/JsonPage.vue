<template>
  <div id="json-page">
    <div class="json-inner">
      <div class="json-field">
        <textarea name="json-value"
                  class="json-textarea"
                  rows="8" cols="50"
                  placeholder="Input your Json here.

PS:The Key Value must be enclosed in double quotation marks."
                  :value="jsonStr"
                  @input="convertJsonToObj"></textarea>
      </div>

      <div class="json-result">
        <json-result-help :renderResult="jsonHtml"></json-result-help>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import JsonResultHelp from './JsonPage/JsonResultHelp'

export default {
  name: 'json-page',
  components: {
    'json-result-help': JsonResultHelp
  },
  computed: {
    ...mapState('Json', {
      'jsonStr': state => state.jsonStr,
      'jsonHtml': state => state.jsonHtml,
      'xmlHtml': state => state.xmlHtml
    })
  },
  methods: {
    ...mapActions('Json', [
      'setJsonText',
      'convertJson'
    ]),
    convertJsonToObj (event) {
      this.setJsonText(event.target.value)
      this.convertJson()
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
  #json-page {
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
  .json-inner {
    text-align: left;
    border: 20px solid #e6e6e6;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(9, 20, 28, 1);
    color: #fff;
    -webkit-flex: 1;
    flex: 1;
    padding: 2vh 1vw;
    width: 90vw;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-app-region: drag;
    .json-field {
      background-color: #172a3a;
      -webkit-app-region: no-drag;
    }
    .json-field .json-textarea {
      flex: 1;
      -webkit-flex: 1;
      padding: 8px;
      font-size: 16px;
      height: 100%;
      background-color: #0f202d;
      color: hsla(0,0%,100%,.3);
      letter-spacing: 0.53px;
      line-height: 1.5;
      outline: none;
      border: 0;
    }
    .json-result {
      flex: 1;
      -webkit-flex: 1;
      overflow: scroll;
      font-size: 16px;
      padding: 5px;
      background-color: #172a3a;
      color: hsla(0,0%,100%,.4);
      letter-spacing: 0.53px;
      line-height: 1.5;
      -webkit-app-region: no-drag;
    }
  }
</style>
