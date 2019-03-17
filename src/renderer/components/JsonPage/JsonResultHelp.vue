<template>
  <div class="json-result-help">
    <div class="btn-bar">
      <div class="xml-btn" @click="toggleXML" v-if="!isXML"> TO XML </div>
      <div class="xml-btn" @click="toggleXML" v-if="isXML"> TO JSON </div>
      <div class="reset-btn" @click="resetInput"> Reset </div>
      <div class="copy-btn" @click="copyObject"> Copy </div>
    </div>
    <div v-html="renderResult" ref="json-result-elem">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  name: 'json-result-help',
  props: {
    renderResult: {
      type: String
    }
  },
  computed: {
    ...mapState('Json', {
      'isXML': state => state.isXML
    })
  },
  mounted () {
    let foldBtns = this.$refs['json-result-elem'].getElementsByClassName('foldBtn')
    Array.prototype.forEach.call(foldBtns, (btn) => {
      btn.addEventListener('click', (event) => {
        this.foldJson(event)
      })
    })
  },
  updated () {
    let foldBtns = this.$refs['json-result-elem'].getElementsByClassName('foldBtn')
    Array.prototype.forEach.call(foldBtns, (btn) => {
      btn.addEventListener('click', (event) => {
        this.foldJson(event)
      })
    })
  },
  methods: {
    ...mapActions('Json', [
      'jsonToXML',
      'convertJson',
      'setJsonText'
    ]),
    foldJson (event) {
      event.preventDefault()
      event.target.parentNode.setAttribute('style', 'display:none;')
      if (event.target.parentNode.className === 'foldOn') {
        event.target.parentNode.nextElementSibling.setAttribute('style', 'display:inline;')
      } else {
        event.target.parentNode.previousElementSibling.setAttribute('style', 'display:inline;')
      }
    },
    copyObject () {
      this.$copyText(this.$refs['json-result-elem'].innerText)
    },
    toggleXML (event) {
      event.preventDefault()
      if (this.isXML) {
        this.convertJson()
      } else {
        this.jsonToXML()
      }
    },
    resetInput (event) {
      event.preventDefault()
      this.setJsonText('')
      this.convertJson()
    }
  }
}
</script>

<style lang="scss">
  .json-result-help {
    padding-left: 1vw !important;
    position: relative;
    .json-key {
      color: #92278f;
      margin-right: 2px;
    }
    .json-value {
      margin-left: 2px;
    }
    .json-number {
      color: #25aae2;
    }
    .json-string {
      color: #29b973;
    }
    .json-boolean {
      color: #f18f01;
    }
    .foldBtnOn {
      color: #999;
      &:before {
        content: "\25BE";
        cursor: pointer;
      }
    }
    .fold-marker {
      border-radius: 4px;
      background: #08f;
      background: -webkit-linear-gradient(#43a8ff,#0f83e8);
      background: linear-gradient(#43a8ff,#0f83e8);
      box-shadow: 0 1px 1px rgba(0,0,0,.2), inset 0 0 0 1px rgba(0,0,0,.1);
      color: #fff;
      font-family: arial;
      font-size: 12px;
      line-height: 0;
      margin: 0 3px;
      padding: 0 4px 1px;
      text-shadow: 0 -1px rgba(0,0,0,.1);
      cursor: pointer;
    }
    .error {
      font-size: 20px;
      font-weight: bold;
    }
    .error-pos-msg p {
      color: #D4AC0D;
      display: inline;
    }
    .btn-bar {
      position: relative;
      display: flex;
      display: -webkit-flex;
      padding: 10px 0;
      border-bottom: 1px solid #0f202d;
      justify-content: space-between;
    }
    .xml-string {
      color: #29b973;
    }
    .xml-val {
      color: #25aae2;
    }
    .btn-bar .copy-btn,
    .btn-bar .reset-btn,
    .btn-bar .xml-btn {
      border-radius: 2px;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      background-color: #0f202d;
      color: hsla(0,0%,100%,.5);
      letter-spacing: .53px;
      font-family: Open Sans, sans-serif;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        color: #ffffff;
      }
    }
  }
</style>
