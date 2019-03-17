<template>
  <div id="tabs-panel">
    <div class="tabs">
      <ul>
        <li v-for="(tab, index) in tabsNav"
            :class="{'is-active': tab['isActive']}">
          <a href="javascript:void(0);" v-if="tab !== null" @click="goToTab(tab['title'], index)">
            {{ tab['title'] }}
          </a>
        </li>
      </ul>
    </div>

    <div class="tab-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tabs',
  props: {
    tabsNav: {
      type: Array
    }
  },
  computed: {
  },
  methods: {
    goToTab (title, index) {
      this.$parent.updateNav(title, index)
    }
  }
}
</script>


<style lang="scss" scoped>
  #tabs-panel {
    .tabs {
      ul {
        list-style: none;
        text-align: left;
        -webkit-app-region: drag;
      }
      ul li {
        display: inline-block;
        background-color: #a3a3a3;
        padding: 1vh 2vw;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        margin-right: 1vw;
      }
      ul li a {
        text-decoration: none;
        color: #333333;
      }
      ul li.is-active {
        background-color: #e6e6e6;
      }
    }
  }
</style>
