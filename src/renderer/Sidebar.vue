<template>
    <transition name="slide">
      <aside class="menu broad-menu" v-if="menuState == false" key="broadMenu">
        <p class="menu-label" @click="toggleMenuSidebar">
          IT Tools
        </p>
        <ul class="menu-list">
          <router-link :to="{name: 'regex-page'}">
            <li :class="{'active': $route.name === 'regex-page'}">{{ $t('sidebar.regexTool') }}</li>
          </router-link>
          <router-link :to="{name: 'timestamp-page'}">
            <li :class="{'active': $route.name === 'timestamp-page'}">{{ $t('sidebar.timestampConverter') }}</li>
          </router-link>
          <router-link :to="{name: 'color-box-page'}">
            <li :class="{'active': $route.name === 'color-box-page'}">{{ $t('sidebar.colorBox') }}</li>
          </router-link>
          <router-link :to="{name: 'json-page'}">
            <li :class="{'active': $route.name === 'json-page'}">{{ $t('sidebar.jsonParser') }}</li>
          </router-link>
          <router-link :to="{name: 'image64-page'}">
            <li :class="{'active': $route.name === 'image64-page'}">{{ $t('sidebar.base64Converter') }}</li>
          </router-link>
          <router-link :to="{name: 'cron-page'}">
            <li :class="{'active': $route.name === 'cron-page'}">{{ $t('sidebar.cronTool') }}</li>
          </router-link>
        </ul>

        <div class="lang broadLang">
          <a href="javascript:void(0);" @click="toggleLanguage">
            <div class="flag" v-if="$i18n.locale === 'cn'">🇨🇳</div>
            <div class="flag" v-if="$i18n.locale === 'en'">🇬🇧</div>
          </a>
        </div>
      </aside>

      <aside class="menu narrow-menu" v-else key="narrowMenu">
        <p class="menu-label" @click="toggleMenuSidebar">
          IT
        </p>
        <ul class="menu-list">
          <router-link :to="{name: 'regex-page'}">
            <li :class="{'active': $route.name === 'regex-page'}">{{ $t('sidebar.regex') }}</li>
          </router-link>
          <router-link :to="{name: 'timestamp-page'}">
            <li :class="{'active': $route.name === 'timestamp-page'}">{{ $t('sidebar.time') }}</li>
          </router-link>
          <router-link :to="{name: 'color-box-page'}">
            <li :class="{'active': $route.name === 'color-box-page'}">{{ $t('sidebar.color') }}</li>
          </router-link>
          <router-link :to="{name: 'json-page'}">
            <li :class="{'active': $route.name === 'json-page'}">{{ $t('sidebar.json') }}</li>
          </router-link>
          <router-link :to="{name: 'image64-page'}">
            <li :class="{'active': $route.name === 'image64-page'}">{{ $t('sidebar.image64') }}</li>
          </router-link>
          <router-link :to="{name: 'cron-page'}">
            <li :class="{'active': $route.name === 'cron-page'}">{{ $t('sidebar.cron') }}</li>
          </router-link>
        </ul>

        <div class="lang">
          <a href="javascript:void(0);" @click="toggleLanguage">
            <div class="flag" v-if="$i18n.locale === 'cn'">🇨🇳</div>
            <div class="flag" v-if="$i18n.locale === 'en'">🇬🇧</div>
          </a>
        </div>
      </aside>
    </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'sidebar',
  methods: {
    ...mapActions('Menu', [
      'toggleMenu',
      'toggleLang'
    ]),
    toggleMenuSidebar () {
      this.toggleMenu()
    },
    toggleLanguage () {
      this.toggleLang(this.$i18n)
    }
  },
  computed: {
    ...mapState('Menu', {
      menuState: state => state.menuState,
      lang: state => state.lang
    })
  }
}
</script>

<style lang="scss" scoped>
$white-font-color: #ffffff;
$aside-bg-color: #333333;
$aside-font-color: #cccccc;
$aside-active-menu-bg-color: #566573;

aside {
  position: fixed;
  top: 0px;
  height: 100vh;
  margin-top: 0px;
  padding: 10px 0px;
  background: $aside-bg-color;
  z-index: 9000;
  p {
    margin-top: 20px;
    font-size: 2em;
    color: $aside-font-color;
    font-weight: 900;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  a {
    padding-bottom: 11px !important;
    width: 100%;
    text-decoration: none;
    color: $white-font-color;
  }

  li {
    margin: 0 0;
    padding: 15px 20px;
    list-style: none;
    font-size: 1em;
    width: 100%;
    &:hover {
      background-color: $aside-active-menu-bg-color;
    }
  }
  li.active {
    background-color: $aside-active-menu-bg-color;
  }
  .lang {
    position: absolute;
    color: $white-font-color;
    text-align: center;
    bottom: 10px;
    line-height: 40px;
    width: 100%;
    opacity: 0.5;
    .flag {
      font-size: 2em;
    }
    &:hover {
      opacity: 1;
    }
  }
  .broadLang {
    width: 7vw;
    text-align: center;
  }
}

aside.narrow-menu {
  width: 7vw;
  ul {
    margin: 0;
    padding: 0;
    li {
      padding: 1.5vh 0;
      text-align: center;
      font-size: 1em;
    }
  }
}
aside.broad-menu {
  width: 30vw;
}
</style>
