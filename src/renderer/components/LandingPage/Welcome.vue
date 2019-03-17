<template>
  <div class="g-container">
    <div class="g-view" v-for="i in 10" :key="i">
      <div class="g-text">
        {{ appName }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appName: 'IT Tools'
      }
    }
  }
</script>

<style lang="scss" scoped>
$count: 10;
body {
}

.g-container {
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  filter: blur(0.2vw) contrast(8);
}

.g-view {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg) scale(1);
  position: absolute;
  overflow: hidden;
  font-size: 8vw;
  height: 18vw;
  font-weight: 800;
}

.g-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 30vw;
  text-align: center;
}

@for $i from 0 through $count {
  .g-view:nth-child(#{$i}) {
    width: #{$i * 3}vw;
    animation: rotate 1.5s ease-in #{$i * 140}ms;
    z-index: 10 - $i;

      &::before {
        $j: $i - 1;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: #{$j * 3}vw;
        height: 10vw;
        background: #fff;
        z-index: 1;
      }
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scaleX(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scaleX(0.3);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scaleX(1);
  }
}

</style>
