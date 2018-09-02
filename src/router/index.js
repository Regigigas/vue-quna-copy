import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/index.vue'
import City from '@/components/pages/city/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
