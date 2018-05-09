import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import index from './index.vue'
import info from './info.vue'
import discovery from './discovery.vue'
import setting from './setting.vue'

Vue.use(Router)
Vue.use(ElementUI)

const router = new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/info',
      component: info
    },
    {
      path: '/discovery',
      component: discovery
    },
    {
      path: '/setting',
      component: setting
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
