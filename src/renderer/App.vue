<template>
  <div id="app">
    <div id="content">
      <div class="columns">
        <div class="column">
          <sidebar></sidebar>
        </div>
        <div class="column">
          <router-view>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'

  export default {
    name: 'it-tools',
    components: {
      'sidebar': Sidebar
    }
  }
</script>

<style>
  /* CSS */
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0;
    padding: 0;
  }
  #content {
    margin: 0;
    padding: 0;
  }
</style>
