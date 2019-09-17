import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/regex-page',
      name: 'regex-page',
      component: require('@/components/RegexPage').default
    },
    {
      path: '/timestamp-page',
      name: 'timestamp-page',
      component: require('@/components/TimestampPage').default
    },
    {
      path: '/color-box-page',
      name: 'color-box-page',
      component: require('@/components/ColorBoxPage').default
    },
    {
      path: '/json-page',
      name: 'json-page',
      component: require('@/components/JsonPage').default
    },
    {
      path: '/image64-page',
      name: 'image64-page',
      component: require('@/components/Image64Page').default
    },
    {
      path: '/cron-page',
      name: 'cron-page',
      component: require('@/components/CronPage').default
    }
  ]
})
