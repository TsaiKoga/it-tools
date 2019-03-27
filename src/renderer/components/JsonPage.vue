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
  $white-font: #ffffff;
  $inner-border-color: #e6e6e6;
  $inner-bg-color: rgba(9, 20, 28, 1);

  $json-page-bg-color: #232323;
  $json-field-bg-color: #172a3a;

  $json-textarea-font-color: hsla(0,0%,100%,.3);
  $json-textarea-bg-color: #0f202d;
  $json-result-font-color: hsla(0,0%,100%,.4);
  $json-result-bg-color: #172a3a;

  %flex-layout {
    display: -webkit-flex;
    display: flex;
  }
  %flex-1 {
    -webkit-flex: 1;
    flex: 1;
  }
  %margin-center {
    margin-left: auto;
    margin-right: auto;
  }
  %inner-border {
    border: 20px solid $inner-border-color;
    background-color: $inner-bg-color;
  }
  %json-textarea-font {
    font-size: 16px;
    letter-spacing: 0.53px;
  }

  #json-page {
    @extend %flex-layout;
    padding: 10px;
    background: $json-page-bg-color;
    text-align: center;
    font-family: futura,helvetica,arial;
    height: 100vh;
    width: 93vw;
    margin-left: 7vw;
  }
  .json-inner {
    @extend %inner-border;
    @extend %flex-layout;
    @extend %flex-1;
    @extend %margin-center;
    text-align: left;
    padding-right: 15px;
    color: $white-font;
    padding: 2vh 1vw;
    width: 90vw;
    justify-content: space-around;
    -webkit-app-region: drag;
    .json-field {
      background-color: $json-field-bg-color;
      -webkit-app-region: no-drag;
    }
    .json-field .json-textarea {
      @extend %flex-1;
      @extend %json-textarea-font;
      color: $json-textarea-font-color;
      background-color: $json-textarea-bg-color;
      padding: 8px;
      height: 100%;
      outline: none;
      border: 0;
    }
    .json-result {
      @extend %flex-1;
      @extend %json-textarea-font;
      overflow: scroll;
      padding: 5px;
      background-color: $json-result-bg-color;
      color: $json-result-font-color;
      -webkit-app-region: no-drag;
    }
  }
</style>
