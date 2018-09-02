// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from 'store/'
import VueLazyload from 'vue-lazyload'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534906961903&di=dcbac7d52c8fea0492daddc7aba226d4&imgtype=0&src=http%3A%2F%2Fgss0.bdstatic.com%2F6ONWsjip0QIZ8tyhnq%2Fit%2Fu%3D3633430119%2C3000620576%26fm%3D173%26s%3D6B243863C890D1E9436470CD010070A0%26w%3D399%26h%3D371%26img.JPEG',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534906839884&di=b50a2ec22e4d6122dc0f5435538539a2&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_gif%2F1RO0R4DpFhTOWgx56hUztZ7jfMwnfCzVS4dzFpUQgCn81pkp3VIWJOa5cWIPzRXR9bJicZnicubk4XNEvbjYrvuQ%2F0.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
