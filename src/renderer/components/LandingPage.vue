<template>
  <Welcome></Welcome>
</template>

<script>
  import Welcome from './LandingPage/Welcome'

  export default {
    name: 'landing-page',
    components: { Welcome },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }


</style>
