<template>
    <transition name="slide">
      <aside class="menu broad-menu" v-if="menuState == false" key="broadMenu">
        <p class="menu-label" @click="toggleMenuSidebar">
          IT Tools
        </p>
        <ul class="menu-list">
          <router-link :to="{name: 'regex-page'}">
            <li :class="{'active': $route.name === 'regex-page'}">Regex Tool</li>
          </router-link>
          <router-link :to="{name: 'timestamp-page'}">
            <li :class="{'active': $route.name === 'timestamp-page'}">Timestamp Converter</li>
          </router-link>
          <router-link :to="{name: 'color-box-page'}">
            <li :class="{'active': $route.name === 'color-box-page'}">Color Box</li>
          </router-link>
        </ul>
      </aside>

      <aside class="menu narrow-menu" v-else key="narrowMenu">
        <p class="menu-label" @click="toggleMenuSidebar">
          IT
        </p>
        <ul class="menu-list">
          <router-link :to="{name: 'regex-page'}">
            <li :class="{'active': $route.name === 'regex-page'}">R</li>
          </router-link>
          <router-link :to="{name: 'timestamp-page'}">
            <li :class="{'active': $route.name === 'timestamp-page'}">T</li>
          </router-link>
          <router-link :to="{name: 'color-box-page'}">
            <li :class="{'active': $route.name === 'color-box-page'}">C</li>
          </router-link>
        </ul>
      </aside>
    </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'sidebar',
  methods: {
    ...mapActions('Menu', [
      'toggleMenu'
    ]),
    toggleMenuSidebar () {
      this.toggleMenu()
    }
  },
  computed: {
    ...mapState('Menu', {
      menuState: state => state.menuState
    })
  }
}
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0px;
  height: 100vh;
  margin-top: 0px;
  padding: 10px 0px;
  // background: linear-gradient(to bottom, #36648B, white 80%, #779a73);
  background: #333333;
  z-index: 9000;

  p {
    font-size: 2em;
    color: #ccc;
    font-weight: 900;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  a {
    padding-bottom: 11px !important;
    width: 100%;
    text-decoration: none;
    color: #fff;
  }

  li {
    margin: 0 0;
    padding: 15px 20px;
    list-style: none;
    font-size: 1em;
    width: 100%;
    &:hover {
      background-color: #566573;
    }
  }
  li.active {
    background-color: #566573;
  }
}

aside.narrow-menu {
  width: 5vw;
  ul {
    margin: 0;
    padding: 0;
    li {
      padding: 0;
      text-align: center;
      font-size: 2em;
    }
  }
}
aside.broad-menu {
  width: 30vw;
}
</style>
