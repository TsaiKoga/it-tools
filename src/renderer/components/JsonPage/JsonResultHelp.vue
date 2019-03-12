<template>
  <div class="json-result-help">
    <div v-html="renderResult" ref="json-result-elem">
    </div>
  </div>
</template>

<script>
export default {
  name: 'json-result-help',
  props: {
    renderResult: {
      type: String
    }
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
    foldJson (event) {
      event.preventDefault()
      event.target.parentNode.setAttribute('style', 'display:none;')
      if (event.target.parentNode.className === 'foldOn') {
        event.target.parentNode.nextElementSibling.setAttribute('style', 'display:inline;')
      } else {
        event.target.parentNode.previousElementSibling.setAttribute('style', 'display:inline;')
      }
    }
  }
}
</script>

<style lang="scss">
  .json-result-help {
    padding-left: 1vw !important;
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
  }
</style>
