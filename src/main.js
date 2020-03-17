// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './packages/styles/index.less'
import {Layout} from 'yd-ui'
import 'yd-ui/package/ydui.min.css'
import API from './packages/api'
Vue.use(Layout)
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$API = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
