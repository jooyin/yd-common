import axios from 'axios'
import { localRead, sessionRead } from './util'
import signutil from './signutil'
import GLOBAL from './global'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  // if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      config.params = config.params ? config.params : {};
      let token = localRead('token') || '';
      let params = config.data || undefined;
      params = params ? JSON.stringify(params) : '';
      let ua = navigator.userAgent;
      let uid = config.headers['x-uid'] || (localRead('userInfo') ? JSON.parse(localRead('userInfo')).uid : '')
      let cid = config.headers['x-cid'] || (sessionRead('customerInfo') ? JSON.parse(sessionRead('customerInfo')).id : '627771')
      let timestamp = new Date().getTime()
      let rands = signutil.getRands()
      let nonce = signutil.getNonceStr()
      config.headers['x-signature'] = signutil.bulidSign(params, config.url, uid, ua, token, timestamp, nonce, rands)
      config.headers['x-token'] = token
      config.headers['x-timestamp'] = timestamp
      config.headers['x-nonce'] = nonce
      config.headers['x-rands'] = rands
      config.headers['x-source-from'] = GLOBAL.stompPostfixUrl
      config.headers['x-uid'] = uid
      config.headers['x-cid'] = cid
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
