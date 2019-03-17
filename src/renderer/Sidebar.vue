<template>
    <transition name="slide">
      <aside class="menu broad-menu" v-if="menuState == false" key="broadMenu">
        <div class="btns-group">
          <span class="close-btn" @click='closeWin'><p></p></span>
          <span class="min-btn" @click='minWin'><p></p></span>
          <span class="max-btn" @click='maxWin'><p></p></span>
          <span class="restore-btn" style='display: none;' @click='restoreWin'><p></p></span>
        </div>

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
          <router-link :to="{name: 'json-page'}">
            <li :class="{'active': $route.name === 'json-page'}">Json Parser</li>
          </router-link>
        </ul>
      </aside>

      <aside class="menu narrow-menu" v-else key="narrowMenu">
        <div class="btns-group">
          <span class="close-btn" @click='closeWin'><p></p></span>
          <span class="min-btn" @click='minWin'><p></p></span>
          <span class="max-btn" @click='maxWin'><p></p></span>
          <span class="restore-btn" style='display: none;' @click='restoreWin'><p></p></span>
        </div>
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
          <router-link :to="{name: 'json-page'}">
            <li :class="{'active': $route.name === 'json-page'}">J</li>
          </router-link>
        </ul>
      </aside>
    </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { remote } from 'electron'

export default {
  name: 'sidebar',
  methods: {
    ...mapActions('Menu', [
      'toggleMenu'
    ]),
    toggleMenuSidebar () {
      this.toggleMenu()
    },
    toggleMaxRestoreButtons () {
      let window = remote.getCurrentWindow()
      let maxBtns = document.getElementsByClassName('max-btn')
      let restoreBtns = document.getElementsByClassName('restore-btn')
      if (window.isFullScreen()) {
        maxBtns[0].style.display = 'none'
        restoreBtns[0].style.display = 'inline'
      } else {
        restoreBtns[0].style.display = 'none'
        maxBtns[0].style.display = 'inline'
      }
    },
    closeWin () {
      let window = remote.getCurrentWindow()
      window.close()
    },
    minWin () {
      let window = remote.getCurrentWindow()
      window.minimize()
    },
    maxWin () {
      let window = remote.getCurrentWindow()
      window.setFullScreen(true)
      this.toggleMaxRestoreButtons()
    },
    restoreWin () {
      let window = remote.getCurrentWindow()
      window.setFullScreen(false)
      this.toggleMaxRestoreButtons()
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
  .btns-group {
    width: 5vw;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    &:hover {
      .close-btn {
        background-color: #E74C3C;
        p::after {
          content: '\2715';
          color: #641E16;
          position: absolute;
          top: 0px;
          left: 3px;
          font-size: 10px;
          font-weight: 800;
          line-height:13px;
        }
      }
      .min-btn {
        background-color: #F5B041;
        p::after {
          content: '\2014';
          color: #784212;
          position: absolute;
          top: 0px;
          left: 3px;
          font-size: 10px;
          font-weight: 800;
          line-height:13px;
        }
      }
      .max-btn {
        background-color: #58D68D;
        p::after {
          content: '\2723';
          color: #186A3B;
          position: absolute;
          top: 0px;
          left: 3px;
          font-size: 10px;
          font-weight: 800;
          line-height:13px;
        }
      }
      .restore-btn:hover {
        background-color: #58D68D;
        p::after {
          color: #186A3B;
          position: absolute;
          top: 0px;
          left: 3px;
          font-size: 10px;
          font-weight: 800;
          line-height:13px;
        }
      }
    }
    .close-btn, .min-btn, .max-btn, .restore-btn {
      width: 13px;
      height: 13px;
      line-height: 13px;
      font-size: 10px;
      text-align: center;
      border-radius: 50%;
      font-weight: bold;
      background-color: #F2F3F4;
      position: relative;
    }
  }

  p {
    margin-top: 20px;
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
