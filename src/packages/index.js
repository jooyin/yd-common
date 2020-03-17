import './styles/index.less';
import avatarHover from './components/avatarHover/index.js'
const ydui = {
  avatarHover: avatarHover
}
const install = function (Vue, opts = {}) {
  Object.keys(ydui).forEach(key => {
    Vue.component(key, ydui[key]);
  });
  Vue.prototype.$YDUI = {
    baseUrl: opts.baseUrl || ''
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...ydui
}

export default API
