<template>
  <div id="image64-page">
    <div class="image64-inner">
      <div class="image-part">
        <img v-if="base64" :src="base64" />
        <div v-else>{{ $t('image64.dragImgHere') }}</div>
        <input type="file" name="imageUpload" class="image-upload-field" ref="fileInput" @change="readImg">
      </div>
      <div class="base64-part">
        <div class="base64-btns-group">
          <div class="copy-btn" @click="copyBase64">{{ $t('image64.copy') }}</div>
          <div class="clean-btn" @click="cleanAll"> {{ $t('image64.clean') }} </div>
        </div>
        <textarea name="base64Area" class="base64-area" ref="base64Input" :value="base64" @input="setBase64" :placeholder="$t('image64.inputBase64Here')"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'image64-page',
  components: {
  },
  computed: {
    ...mapState('Image64', {
      'base64': state => state.base64
    })
  },
  methods: {
    ...mapActions('Image64', [
      'setImage',
      'resetAll'
    ]),
    checkImageValid (file) {
      const imageTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
      return imageTypes.includes(file['type'])
    },
    readImg (event) {
      const input = this.$refs.fileInput
      const files = input.files
      console.log(files[0])
      if (files && files[0]) {
        let isValid = this.checkImageValid(files[0])
        if (!isValid) return null
        const reader = new FileReader()
        reader.onload = e => {
          this.setImage(e.target.result)
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
    copyBase64 () {
      console.log(this.$refs['base64Input'].value)
      this.$copyText(this.$refs['base64Input'].value)
    },
    setBase64 (event) {
      this.setImage(event.target.value)
    },
    cleanAll () {
      this.resetAll()
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
  $white-font-color: #ffffff;
  $inner-border-color: #e6e6e6;
  $inner-bg-color: rgba(9, 20, 28, 1);

  $image64-page-bg-color: #232323;

  $base64-area-bg-color: #172a3a;
  $base64-area-font-color: rgba(255, 255, 255, 0.3);

  $btn-bg-color: #0f202d;
  $btn-font-color: hsla(0,0%,100%,.5);

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
  %base64-area-font {
    font-size: 16px;
    letter-spacing: 0.53px;
  }

  #image64-page {
    @extend %flex-layout;
    padding: 10px;
    background: $image64-page-bg-color;
    text-align: center;
    font-family: futura,helvetica,arial;
    height: 100vh;
    margin-left: 7vw;
    .image64-inner {
      @extend %inner-border;
      @extend %flex-layout;
      @extend %flex-1;
      @extend %margin-center;
    }
    .image-part {
      width: 50%;
      height: 100%;
      border-radius: 5px;
      color: #999999;
      font-size: 2em;
      text-align: center;
      line-height: 95vh;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .image-upload-field {
      width: 40vw;
      height: 90vh;
      opacity: 0;
      z-index: 1000;
      position: absolute;
      top: 0;
      left: 0;
    }
    .base64-part {
      width: 50%;
      height: 100%;
      position: relative;
      .base64-btns-group {
        height: 10%;
        width: 100%;
        background-color: #172a3a;
        border-bottom: 1px solid #0f202d;
        justify-content: space-between;
      }
      .base64-btns-group .copy-btn,
      .base64-btns-group .clean-btn {
        border-radius: 2px;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        background-color: $btn-bg-color;
        color: $btn-font-color;
        letter-spacing: .53px;
        font-family: Open Sans, sans-serif;
        padding: 5px 10px;
        cursor: pointer;
        display: inline-block;
        margin-top: 3%;
        &:hover {
          color: $white-font-color;
        }
      }
      .base64-area {
        @extend %base64-area-font;
        width: 100%;
        height: 90%;
        background-color: $base64-area-bg-color;
        color: $base64-area-font-color;
        padding: 15px;
        outline: none;
        border: 0;
      }
    }
  }
</style>
