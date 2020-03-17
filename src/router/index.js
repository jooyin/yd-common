import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import utils from '@/packages/libs/utils'
import { localRead, sessionRead, sessionRemove, localSave, sessionSave } from '@/packages/libs/util'
import axios from '@/packages/libs/api.request'
Vue.prototype.axios = axios
Vue.use(Router);
const router = new Router({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
})

router.afterEach(to => {
})
export default router