<template>
  <!-- <div id="app">
    <router-view></router-view>
  </div> -->
  <Layout
    :notice="{}"
    :nav="menuList"
    :serviceModule="true"
    :navGroup="false"
    logo="https://www.baidu.com"
  >
  <div slot="menuCustom">.</div>
    <template slot="avatarDropDown">
      <avatarHover></avatarHover>
    </template>
  </Layout>
</template>

<script>
import avatarHover from '@/packages/components/avatarHover'
import Nav from './Nav'
import GLOBAL from '@/packages/libs/global'
import {sessionRead, sessionSave} from '@/packages/libs/util'
export default {
  name: 'App',
  data () {
      return {
        menuList: [],
        customerInfo: ''
      }
  },
  components: {
    avatarHover
  },
  created () {
    this.menuList = Nav(this.customerId, GLOBAL);
    this.customerInit()
  },
  methods: {
    customerInit () {
      this.axios.request({
        url: this.$API.customerInfo,
        method: 'post'
        }).then(res => {
          if (res.data.code != 0) {
          } else {
            sessionSave('customerInfo', JSON.stringify(res.data.data));
          }
      });
    }
  }
}
</script>
