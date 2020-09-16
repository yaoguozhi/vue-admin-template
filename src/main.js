import Vue from 'vue'

import NProgress from 'nprogress' // progress bar
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'nprogress/nprogress.css' // progress bar style
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import getPageTitle from '@/utils/get-page-title'
import '@/icons' // icon
import '../mock'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
