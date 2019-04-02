<template>
  <div id="color-box-page">
    <div class="header">
      <div class="current-color-bar">
        <label>{{ $t('color.currentColor') }}: </label>
        <div class="current-color-box">
          <p v-if="currentColor['name'] !== ''">{{ currentColor['name'] }}</p>
          <span class="current-color" :style="'background-color:' + currentColor['hex']" v-if="currentColor['hex']">{{ $t('color.copied') }}</span>
          <p v-if="currentColor['hex'] !== ''">{{ 'HEX: ' + currentColor['hex'] }}</p>
          <p v-if="currentColor['rgb'] !== ''">{{ 'RGB(' + currentColor['rgb'] +')' }}</p>
          <p v-if="currentColor['hsl'] !== ''">{{ 'HSL(' + currentColor['hsl'] + ')' }}</p>
        </div>
        <a href="javascript:void(0);" class="toggle-form-btn" @click="toggleFormBox" v-if="!toggleColorForm">▼</a>
        <a href="javascript:void(0);" class="toggle-form-btn" @click="toggleFormBox" v-if="toggleColorForm">▲</a>
      </div>

      <transition name="slide-down">
        <div class="color-form" v-if="toggleColorForm">
          <div class="hex-group">
            <label>{{ $t('color.inputHex') }}: </label>
            <span class="hex-symbol">#</span><input type="text" name="hex" class="colorHex" @input="inputHexColor">

            <div class="color-demo"
                :style="'background-color: #' + colorHex "
                v-if="(colorHex !== '') && (colorHex.length === 3 || colorHex.length === 6)"
            ></div>
          </div>

          <div class="rgb-group">
            <label>{{ $t('color.inputRGB') }}: </label>
            <div class="rgb-input-group">
              <input type="number" name="rgb-r" min='0' max='255' class="colorRgb" placeholder="R" @input="inputRgbColor($event, 'r')">
              <input type="number" name="rgb-g" min='0' max='255' class="colorRgb" placeholder="G" @input="inputRgbColor($event, 'g')">
              <input type="number" name="rgb-b" min='0' max='255' class="colorRgb" placeholder="B" @input="inputRgbColor($event, 'b')">

              <div class="color-demo"
                :style="'background-color: rgb(' + colorRgb +')' "
                v-if="(colorRgb !== '')"
              ></div>
            </div>
          </div>

          <div class="hsl-group">
            <label>{{ $t('color.inputHSL') }}: </label>
            <div class="hsl-input-group">
              <input type="number" name="hsl-h" class="colorHsl" @input="inputHslColor($event, 'h')">
              <input type="number" name="hsl-s" min='0' max='100' class="colorHsl" @input="inputHslColor($event, 's')">
              <span class="hsl-symbol">%</span>
              <input type="number" name="hsl-l" min='0' max='100' class="colorHsl" @input="inputHslColor($event, 'l')">
              <span class="hsl-symbol">%</span>

              <div class="color-demo"
                  :style="'background-color: hsl(' + colorHsl + ');'"
                  v-if="(colorHsl !== '')"
              ></div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="color-box-inner">
      <div class="color-content">
        <div class="color-row" v-for="(colorRow, rowIndx) in colorMatrix">
          <div :class="{'color-item': true, 'stretch': colorItem['anim']}"
              :style="'background-color:' + colorItem['hex']"
              @click="clickColor(colorItem, rowIndx, colIndx)"
              v-for="(colorItem, colIndx) in colorRow"
              @animationend="clickedColor(rowIndx, colIndx)"
              >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'color-box-page',
  computed: {
    ...mapState('Color', {
      colorMatrix: state => state.colorMatrix,
      currentColor: state => state.currentColor,
      toggleColorForm: state => state.toggleColorForm,
      colorHex: state => state.colorHex,
      colorRgb: state => state.colorRgb,
      colorHsl: state => state.colorHsl
    })
  },
  methods: {
    ...mapActions('Color', [
      'setCurrentColor',
      'activeColor',
      'disactiveColor',
      'toggleForm',
      'setHexColor',
      'setRgbColor',
      'setHslColor'
    ]),
    clickColor (obj, rowIndx, colIndx) {
      this.activeColor({ row: rowIndx, col: colIndx })
      let currentObj = { name: obj['name'] + '-' + colIndx, hex: obj['hex'], rgb: obj['rgb'], hsl: obj['hsl'] }
      this.setCurrentColor(currentObj)
      this.$copyText(currentObj['hex'])
    },
    clickedColor (rowIndx, colIndx) {
      this.disactiveColor({ row: rowIndx, col: colIndx })
    },
    toggleFormBox () {
      this.toggleForm()
    },
    inputHexColor (event) {
      this.setHexColor(event)
    },
    inputRgbColor (event, sym) {
      this.setRgbColor({ sym: sym, value: event.target.value })
    },
    inputHslColor (event, sym) {
      this.setHslColor({ sym: sym, value: event.target.value })
    }
  }
}
</script>

<style lang="scss" scoped>
  $white-font-color: #ffffff;
  $white-bg-color: #ffffff;
  $page-bg-color: #232323;
  $header-bg-color: #333333;
  $label-font-color: #777777;
  $silver-bg-color: #cccccc;
  $inner-bg-color: #7B7D7D;
  $toggle-btn-bg-color: #2980B9;
  $toggle-hover-btn-bg-color: #5499C7;

  %flex-layout {
    display: flex;
    display: -webkit-flex;
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
  %symbol-font-bg-color {
    color: $white-font-color;
    background: $silver-bg-color;
  }

  /* CSS */
  #color-box-page {
    @extend %flex-layout;
    width: 93vw;
    padding: 10px;
    padding-top: 0;
    background: $page-bg-color;
    text-align: center;
    font-family: futura,helvetica,arial;
    margin-left: 7vw;
    .header {
      height: 8vh;
      width: 91vw;
      background-color: $header-bg-color;
      position: fixed;
      z-index: 1000;
      text-align: left;
      -webkit-app-region: drag;
    }

    .header .current-color-bar {
      @extend %flex-layout;
      justify-content: space-between;
    }
    .header label {
      line-height: 8vh;
      margin-right: 1vw;
      margin-left: 1vw;
      font-size: 800;
      color: $white-font-color;
      width: 15vw;
    }
    .header .current-color-box {
      @extend %flex-layout;
      text-align: left;
      line-height: 8vh;
      .current-color {
        height: 5vh;
        width: 8vw;
        margin: 1.5vh 2vw;
        border-radius: 5px;
        line-height: 5vh;
        color: $white-font-color;
        text-align: center;
      }
      p {
        color: $white-font-color;
        font-size: 0.8em;
        margin-left: 1.5vw;
        -webkit-app-region: no-drag;
      }
    }


    .header .color-form {
      background-color: $white-bg-color;
      padding-top: 2vh;
      label {
        color: $label-font-color;
      }
      .hex-group,
      .rgb-group,
      .hsl-group {
        @extend %flex-layout;
        justify-content: flex-start;
        padding-bottom: 8px;
      }
      .rgb-group .rgb-input-group,
      .hsl-group .hsl-input-group{
        @extend %flex-layout;
        justify-content: flex-start;
      }
      .hex-group .hex-symbol {
        @extend %symbol-font-bg-color;
        height: 8vh;
        font-size: 4vh;
        line-height: 8vh;
        padding: 0 1vw;
      }
      .hex-group input {
        height: 8vh;
        width: 11vw;
        font-size: 4vh;
      }
      .rgb-group input,
      .hsl-group input {
        height: 8vh;
        width: 8vw;
        font-size: 4vh;
        padding-left: 1vw;
      }
      .rgb-group input {
        margin-right: 10px;
      }
      .hsl-group input[name="hsl-h"] {
        margin-right: 10px;
      }
      .rgb-group .hsl-symbol,
      .hsl-group .hsl-symbol {
        @extend %symbol-font-bg-color;
        font-size: 4vh;
        height: 8vh;
        line-height: 8vh;
        padding: 0 1vw;
        margin-right: 10px;
      }
      .color-demo {
        height: 8vh;
        width: 10vw;
        border-radius: 5px;
        position: absolute;
        right: 5vw;
      }
    }
    .slide-down-enter-active {
      transition: all .3s ease;
    }
    .slide-down-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-down-enter, .slide-down-leave-to {
      transform: translateY(0px);
      opacity: 0;
    }


    .header .toggle-form-btn {
      width: 5vw;
      height: 8vh;
      line-height: 8vh;
      text-decoration: none;
      text-align: center;
      color: $white-font-color;
      background-color: $toggle-btn-bg-color;
      &:hover {
        background-color: $toggle-hover-btn-bg-color;
      }
    }


    .color-box-inner {
      // border: 20px solid #e6e6e6;
      @extend %margin-center;
      @extend %flex-1;
      background-color: $inner-bg-color;
      width: 95vw;
      margin-top: 8vh;
      .color-content {
        text-align: center;
      }
      .color-content .color-row {
        @extend %flex-layout;
        justify-content: space-around;
        flex-direction: row
      }
      .color-content .color-row .color-item {
        @extend %flex-2;
        height: 10vh;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    .stretch {
      animation: stretch .5s;
      z-index: 9001;
    }
    @keyframes stretch {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
