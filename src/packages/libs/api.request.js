import HttpRequest from './axios'
import GLOBAL from './global'
let baseUrl;
if (!this.$YDUI || this.$YDUI.baseUrl === '') {
    baseUrl = GLOBAL.API_URL
} else {
    baseUrl = this.$YDUI.baseUrl
}
const axios = new HttpRequest(baseUrl)
export default axios
