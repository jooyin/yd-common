<template>
  <div class="operationDropdown">
    <ul>
      <li class="gray" @click="returnCustomerList">
        返回客户管理
      </li>
      <li @click="toggleCustomer = true">
        {{currentPeriod}}<br />
        {{taxType}}
        <em>客户档案</em>
        <i style="width:9px;">
          <svg
                  t="1573464055922"
                  class="icon"
                  viewBox="0 0 1152 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1845"
                  width="7"
                  height="11"
          >
            <path
                    d="M624.576 0 544.128 80.512 976.192 512.032 544.128 943.488 624.576 1024 1136.096 512.032Z"
                    p-id="1846"
            ></path>
          </svg>
        </i>
      </li>
      <li @click="bossInspectShow = true">
        Boss查账
      </li>
      <li @click="operationLogShow = true">
        操作日志
      </li>
      <li @click="showSearchCustomer = true">
        切换账套
      </li>
      <li @click="personalShow">
        {{personalAccount}}
        <i style="width:9px;">
          <svg
                  t="1573464055922"
                  class="icon"
                  viewBox="0 0 1152 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1845"
                  width="7"
                  height="11"
          >
            <path
                    d="M624.576 0 544.128 80.512 976.192 512.032 544.128 943.488 624.576 1024 1136.096 512.032Z"
                    p-id="1846"
            ></path>
          </svg>
        </i>
      </li>
      <li class="gray" @click="loginOut">
        退出登录
        <i style="width:15px;">
          <svg
                  t="1573464840943"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2589"
                  width="15"
                  height="15"
          >
            <path
                    d="M771.54364719 169.44052531a454.73843625 454.73843625 0 0 1 80.95560844 73.26003469 478.69204875 478.69204875 0 0 1 60.63686156 88.40784375 436.30555969 436.30555969 0 0 1 38.44745062 100.54434094 445.40032875 445.40032875 0 0 1 13.26193688 107.63156906q0 93.97420687-35.92281563 176.34421969t-97.15281375 143.47834125q-61.24520719 61.13874656-143.72167968 96.98551875t-176.57234907 35.90760656q-93.09210563 0-175.55337-35.87718937a468.42621469 468.42621469 0 0 1-144.20835656-97.00072782 449.94771281 449.94771281 0 0 1-97.15281375-143.49354937Q59.14037656 633.27372969 59.14037656 539.28431375a439.40812312 439.40812312 0 0 1 12.63838219-105.091725A466.40346562 466.40346562 0 0 1 107.70157438 336.17288188a432.18401813 432.18401813 0 0 1 57.68638406-86.90218782 491.46730969 491.46730969 0 0 1 76.91010937-72.75814969 64.75840313 64.75840313 0 0 1 48.05931281-12.16691437c11.16314437 1.44482156 22.67608688 11.69544656 23.67985782 24.10569937 1.67295094 20.79021563-13.09464188 37.2459675-29.74810594 49.92997594q-74.96340281 54.75111562-114.84046594 134.39878125T129.61722969 543.93815844a372.36842344 372.36842344 0 0 0 29.74810594 147.99530812 381.73694813 381.73694813 0 0 0 81.54874593 121.27372219 389.34126937 389.34126937 0 0 0 121.33455657 82.05063094 377.174355 377.174355 0 0 0 296.32520718 0A386.42121 386.42121 0 0 0 862.01986719 691.94867562a365.00743969 365.00743969 0 0 0 30.28040812-148.01051718 375.65349 375.65349 0 0 0-42.81233062-175.34044875 370.84755938 370.84755938 0 0 0-120.1482825-136.11735844c-17.45952281-11.87795063-30.2652-28.74433594-28.15119844-49.53455063 1.52086406-14.76759281 10.32666844-22.41754031 21.79398563-24.10570031 17.61160875-2.60067844 33.73277063 0.501885 48.56119781 10.64605031z"
                    p-id="2590"
            ></path>
            <path
                    d="M501.92481875 32.000015a40.24207031 40.24207031 0 0 1 40.2724875 40.21165312v402.55758094a40.25727937 40.25727937 0 0 1-80.49934969 0V72.25729438A40.24207031 40.24207031 0 0 1 501.92481875 32.000015z"
                    p-id="2591"
            ></path>
          </svg>
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
import {sessionRead, localRead, sessionSave} from '../../libs/util'
  export default {
    name: 'avatarHover',
    data () {
        return {
          customerInfo: '',
          taxType: '',
          personalAccount: ''
        }
    },
    created () {
      this.customerInfo = JSON.parse(sessionRead('customerInfo')) || ''
      this.taxType = this.customerInfo.value_added_tax == 1 ? '一般纳税人' : '小规模纳税人';
      this.periodInit(this.customerInfo.current_period);
      this.personalAccount = localRead('userInfo') ? JSON.parse(localRead('userInfo')).login_name : '游客';
    },
    methods: {
      loginOut () {
        this.axios.request({
          url: this.$API.loginOut,
          method: 'post'
        }).then((res) => {
            window.localStorage.clear();
            window.sessionStorage.clear();
            window.location.href = '/';
          })
      },
      periodInit (str) {
        str = String(str);
        this.currentPeriod = str.substr(0, 4) + '年' + str.substr(4) + '期';
      },
      returnCustomerList () {
        window.location.href = '/customerManagement';
      },
      personalShow () {}
    },
    components: {
    }
  }
</script>

<style scoped lang="less">

</style>
