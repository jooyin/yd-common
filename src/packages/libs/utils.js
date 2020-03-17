export default {
  accSub (arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  currency (value, placeholder) {
    if (value == '--') return '--';
    value = parseFloat(value);
    placeholder = placeholder || '';
    if (value === 0 || isNaN(value)) {
      return placeholder;
    }
    value = value.toFixed(2);
    if (value === 0) {
      return placeholder;
    }
    let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
    if (parseFloat(value.replace(reg, '$1,')) == 0) {
      return '0.00'
    }
    return value.replace(reg, '$1,');
  },
  currencyPercent (value, placeholder) {
    if (isNaN(value)) {
      return value;
    }
    value = parseFloat(value);
    placeholder = placeholder || '';
    if (value === 0 || isNaN(value)) {
      return placeholder;
    }
    value = value.toFixed(2);
    if (value === 0) {
      return placeholder;
    }
    let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
    return value.replace(reg, '$1,') + '%';
  },
  currencyForBalance (value, placeholder) {
      if (parseFloat(value) == 0) return parseFloat(value).toFixed(2);
      if (isNaN(value)) {
          return value;
      }
      value = parseFloat(value);
      placeholder = placeholder || '';
      if (value === 0 || isNaN(value)) {
          return placeholder;
      }
      value = value.toFixed(2);
      if (value === 0) {
          return placeholder;
      }
      let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
      return value.replace(reg, '$1,');
  },
  noZeroCurrency (value, placeholder) {
    if (isNaN(value)) {
      return value;
    }
    value = parseFloat(value);
    placeholder = placeholder || '';
    if (isNaN(value)) {
      return placeholder;
    }
    value = value.toFixed(2);
    if (value === 0) {
      return placeholder;
    }
    let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
    return value.replace(reg, '$1,');
  },
  decurrency (value, placeholder) {
    placeholder = placeholder || '';
    value = value.toString()
    let reg = /,/g;
    value = value.replace(reg, '');
    value = parseFloat(value);
    if (isNaN(value)) {
      return placeholder;
    }
    return value.toFixed(2);
  },
  noZerodecurrency (value, placeholder) {
    if (isNaN(value)) {
      return '';
    }
    if (value == '' || parseFloat(value) == 0) {
      return ''
    }
    placeholder = placeholder || '';
    value = value.toString()
    let reg = /,/g;
    value = value.replace(reg, '');
    value = parseFloat(value);
    if (isNaN(value)) {
      return placeholder;
    }
    return value.toFixed(2);
  },
  chunk (arr, size) { // 按照指定size拆分数组
    let arr2 = [];
    for (let i = 0; i < arr.length; i = i + size) {
      arr2.push(arr.slice(i, i + size));
    }
    return arr2;
  },
  trimSpace (str) { // 去空格
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },
  base64encode (str) { // 编码
    let base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let out, i, len;
    let c1, c2, c3;
    len = str.length;
    i = 0;
    out = '';
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += '==';
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += '=';
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}, // 解码的方法
  ArrRemove: function (arr, obj) {
    /**
     *删除数组指定下标或指定对象
     */
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      if (!isNaN(obj)) {
        temp = i;
      }
      if (temp == obj) {
        for (let j = i; j < arr.length; j++) {
          arr[j] = arr[j + 1];
        }
        arr.length = arr.length - 1;
      }
    }
  },
  ArrRemoveItem: function (arr, item) {
    /**
     *删除数组指定下标或指定对象
     */
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        res.push(arr[i])
      }
    }
    return res;
  },
  base64decode (str) {
    let base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
      52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
      -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    let c1, c2, c3, c4;
    let i, len, out;
    len = str.length;
    i = 0;
    out = '';
    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1) {
          break;
        }
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1) {
          break;
        }
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) {
              return out;
            }
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1) {
          break;
        }
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) {
              return out;
            }
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1) {
          break;
        }
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
  },
  unique (array) { // 数组去重
    return Array.from(new Set(array));
  },
  getLastDayOfMonth (year, month) { // 获取某年某月的最后一天
      let date = new Date(year, month - 1, '01');
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
      return cdate.getDate();
  },
  getDaysInMonth (year, month) { // 获取当前月天数
    month = parseInt(month, 10); // parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
    let temp = new Date(year, month, 0);
    return temp.getDate();
  },
  CheckHanzi (str) { // 校验 : 汉字
    let filter = /^[\u2E80-\u9FFF]+$/;
    if (filter.test(str)) {
        return true;
    } else {
        return false;
    }
  },
  shadowCopy (src) { // js对象深度拷贝
    let dst = {};
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
  },
  showKeyName (e) { // 键盘按键事件函数
    let keyName;
    switch (e.keyCode) {
        case 1:
            keyName = e.keyCode + '[左键]';
            break;
        case 8:
            keyName = e.keyCode + '[退格]';
            break;
        case 9:
            keyName = e.keyCode + '[Tab]';
            break;
        case 13:
            keyName = e.keyCode + '[Enter]';
            break;
        case 16:
            keyName = e.keyCode + '[Shift]';
            break;
        case 17:
            keyName = e.keyCode + '[Ctrl]';
            break;
        case 18:
            keyName = e.keyCode + '[Alt]';
            break;
        case 19:
            keyName = e.keyCode + '[PauseBreak]';
            break;
        case 20:
            keyName = e.keyCode + '[Caps Lock]';
            break;
        case 27:
            keyName = e.keyCode + '[Esc]';
            break;
        case 32:
            keyName = e.keyCode + '[空格]';
            break;
        case 33:
            keyName = e.keyCode + '[PageUp]';
            break;
        case 34:
            keyName = e.keyCode + '[PageDown]';
            break;
        case 35:
            keyName = e.keyCode + '[End]';
            break;
        case 36:
            keyName = e.keyCode + '[Home]';
            break;
        case 37:
            keyName = e.keyCode + '[方向键左]';
            break;
        case 38:
            keyName = e.keyCode + '[方向键上]';
            break;
        case 39:
            keyName = e.keyCode + '[方向键右]';
            break;
        case 40:
            keyName = e.keyCode + '[方向键下]';
            break;
        case 45:
            keyName = e.keyCode + '[Insert]';
            break;
        case 46:
            keyName = e.keyCode + '[Delete]';
            break;
        case 91:
            keyName = e.keyCode + '[左Win]';
            break;
        case 92:
            keyName = e.keyCode + '[右Win]';
            break;
        case 93:
            keyName = e.keyCode + '[快捷菜单键]';
            break;
        case 95:
            keyName = e.keyCode + '[Sleep]';
            break;
        case 96:
            keyName = e.keyCode + '[小键盘区0]';
            break;
        case 97:
            keyName = e.keyCode + '[小键盘区1]';
            break;
        case 98:
            keyName = e.keyCode + '[小键盘区2]';
            break;
        case 99:
            keyName = e.keyCode + '[小键盘区3]';
            break;
        case 100:
            keyName = e.keyCode + '[小键盘区4]';
            break;
        case 101:
            keyName = e.keyCode + '[小键盘区5]';
            break;
        case 102:
            keyName = e.keyCode + '[小键盘区6]';
            break;
        case 103:
            keyName = e.keyCode + '[小键盘区7]';
            break;
        case 104:
            keyName = e.keyCode + '[小键盘区8]';
            break;
        case 105:
            keyName = e.keyCode + '[小键盘区9]';
            break;
        case 106:
            keyName = e.keyCode + '[*]';
            break;
        case 107:
            keyName = e.keyCode + '[+]';
            break;
        case 109:
            keyName = e.keyCode + '[-]';
            break;
        case 110:
            keyName = e.keyCode + '[.]';
            break;
        case 111:
            keyName = e.keyCode + '[/]';
            break;
        case 112:
            keyName = e.keyCode + '[F1]';
            break;
        case 113:
            keyName = e.keyCode + '[F2]';
            break;
        case 114:
            keyName = e.keyCode + '[F3]';
            break;
        case 115:
            keyName = e.keyCode + '[F4]';
            break;
        case 116:
            keyName = e.keyCode + '[F5]';
            break;
        case 117:
            keyName = e.keyCode + '[F6]';
            break;
        case 118:
            keyName = e.keyCode + '[F7]';
            break;
        case 119:
            keyName = e.keyCode + '[F8]';
            break;
        case 120:
            keyName = e.keyCode + '[F9]';
            break;
        case 121:
            keyName = e.keyCode + '[F10]';
            break;
        case 122:
            keyName = e.keyCode + '[F11]';
            break;
        case 123:
            keyName = e.keyCode + '[F12]';
            break;
        case 144:
            keyName = e.keyCode + '[NumLock]';
            break;
        case 145:
            keyName = e.keyCode + '[ScrollLock]';
            break;
        case 186:
            keyName = e.keyCode + '[;]';
            break;
        case 187:
            keyName = e.keyCode + '[=]';
            break;
        case 188:
            keyName = e.keyCode + '[,]';
            break;
        case 189:
            keyName = e.keyCode + '[-]';
            break;
        case 190:
            keyName = e.keyCode + '[.]';
            break;
        case 191:
            keyName = e.keyCode + '[/]';
            break;
        case 192:
            keyName = e.keyCode + '[`]';
            break;
        case 219:
            keyName = e.keyCode + '[[]';
            break;
        case 220:
            keyName = e.keyCode + '[\\]';
            break;
        case 221:
            keyName = e.keyCode + '[]]';
            break;
        case 222:
            keyName = e.keyCode + "[']";
            break;
        // case 255:keyName = e.keyCode+"[Power]";break;
        case 255:
            keyName = e.keyCode + '[Wake]';
            break;
        default:
            keyName = e.keyCode + '[' + String.fromCharCode(e.keyCode) + ']';
            break;
    }
    if ((e.shiftKey) && (e.keyCode != 16)) {
        keyName = e.keyCode + '[Shift] + ' + keyName;
    }
    if ((e.altKey) && (e.keyCode != 18)) {
        keyName = e.keyCode + '[Alt] + ' + keyName;
    }
    if ((e.ctrlKey) && (e.keyCode != 17)) {
        keyName = e.keyCode + '[Ctrl] + ' + keyName;
    }
    if ((e.shiftKey) && (e.keyCode == 83)) {
        keyName = e.keyCode + '[Shift] + ' + keyName;
    }
    if ((e.shiftKey) && (e.keyCode == 13)) {
        keyName = e.keyCode + '[Shift] + ' + keyName;
    }
    return keyName;
  },
  fullChar2halfChar (str) { // 全角转半角
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65281 && code <= 65373) {
        result += String.fromCharCode(str.charCodeAt(i) - 65248);
      } else if (code == 12288) {
        result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  },
  moneyToCNY (num) { // 人民币大写
    num = parseFloat(num);
    if (isNaN(num)) return '无效数值！';
    let strPrefix = '';
    if (num < 0) strPrefix = '(负)';
    num = Math.abs(num);
    if (num >= 1000000000000) return '无效数值！';
    let strOutput = '';
    let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    let strCapDgt = '零壹贰叁肆伍陆柒捌玖';
    num += '00';
    let intPos = num.indexOf('.');
    if (intPos >= 0) {
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (let i = 0; i < num.length; i++) {
      strOutput += strCapDgt.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
    }
    return strPrefix + strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元');
  },
  /**
   * unix时间戳转标准格式日期
   */
  timeTrans (value) {
    let date = new Date(value * 1000); // 如果date为13位不需要乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
  },
  formatTime (value) {
    const date = new Date(value)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },
  todayPeriod () {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    return [year, month].map(formatNumber).join('')
  },
  getQueryVariable (letiable) {
  let query = window.location.search.substring(1);
  let lets = query.split('&');
  for (let i = 0; i < lets.length; i++) {
    let pair = lets[i].split('=');
    if (pair[0] == letiable) { return pair[1]; }
  }
  return false;
  },
  fillNumber (num, fill) {
    fill = fill || 3;
    let len = ('' + num).length;
    return (Array(
      fill > len ? fill - len + 1 || 0 : 0
    ).join(0) + num);
  },
  search (searchword, allAccount, accountList, isNumber) {
    // 检索结果集
    let retList = [];
    // 检索词为空 获取全部列表
    if (searchword == null || searchword == undefined || searchword == '') {
      retList = allAccount;
    } else {
      accountList.forEach((value, index, arr) => {
        if (isNumber) {
          if (this.regSearch(searchword, value)) {
            retList.push(allAccount[index]);
          }
        } else {
          if (this.kmpAdd(searchword, value)) {
            retList.push(allAccount[index]);
          }
        }
      })
    }
    return retList;
  },
  searchReturnIndex (searchword, allAccount, accountListArrWithPonit, accountListWithText, accountListArr) {
    // 检索结果集
    let retList = [];
    let arr = searchword.split(' ');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf('.') != -1 || arr[i].indexOf('_') != -1) {
        accountListArrWithPonit.forEach((value, index, list) => {
          if (parseInt(arr[i]) == arr[i]) {
            if (this.regSearch(arr[i], value)) {
              retList.push(index);
            }
          } else {
            if (this.kmpAdd(arr[i], value)) {
              retList.push(index);
            }
          }
        })
        continue
      } else if (isNaN(parseInt(arr[i]))) {
        // console.log(2, arr[i]);
        accountListWithText.forEach((value, index, list) => {
          if (this.kmpAdd(arr[i], value)) {
            retList.push(index);
            // console.log(allAccount[index], 2)
          }
        })
        continue
      } else {
        // console.log(3, arr[i]);
        accountListArr.forEach((value, index, list) => {
          if (this.regSearch(arr[i], value)) {
            retList.push(index);
          }
        })
        continue
      }
      // accountList.forEach((value, index, arr) => {
      //   if (parseInt(arr[i]) == arr[i]) {
      //     if (this.regSearch(arr[i], value)) {
      //       retList.push(index);
      //     }
      //   } else {
      //     if (this.kmpAdd(arr[i], value)) {
      //       retList.push(index);
      //     }
      //   }
      // })
    }
    console.log(retList);
    return retList;
  },
  kmpAdd (searchWord, targetStr) {
    let createPartialMatchTable = function (str) {
      let partialMatchTable = [];
      partialMatchTable[0] = 0;
      let i = 1; let j = 0;
      while (i < str.length) {
        if (str[i] === str[j]) {
          partialMatchTable[i++] = ++j;
        } else if (j > 0) {
          j = partialMatchTable[j - 1];
        } else {
          partialMatchTable[i++] = 0;
        }
      }
      return partialMatchTable;
    };
    let partialMatchTable = createPartialMatchTable(searchWord);
    let i = 0; let j = 0;
    // if (parseInt(searchWord) == searchWord) {
    // let count = 0;
    // for (let k = 0; k < searchWord.length; k++) {
    // if (targetStr[k] == searchWord[k]) count++;
    // }
    // if (count == searchWord.length) {
    // return true;
    // }
    // } else {
    while (i < targetStr.length) {
      if (targetStr[i] === searchWord[j]) {
        ++i;
        ++j;
      }
      if (j === searchWord.length) {
        return true;
      } else if (i < targetStr.length && targetStr[i] !== searchWord[j]) {
        if (j > 0) {
          j = partialMatchTable[j - 1];
        } else {
          ++i;
        }
      }
    }
    // }
    return false;
  },
  regSearch (keywords, str) {
    let keywordsLen = keywords.toString().length;
    return keywords == str.substr(0, keywordsLen);
  },
  inArray (needle, array, bool) {
    if (typeof needle == 'string' || typeof needle == 'number') {
      let len = array.length;
      for (let i = 0; i < len; i++) {
        if (needle === array[i]) {
          if (bool) {
            return i;
          }
          return true;
        }
      }
      return false;
    }
  },
  filterUnique (arr) {
    // 提取重复
    return arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i))
  },
  deduplication (arr) {
    // 去重
    return [...new Set(arr)]
  },
  clearNoNum (value) {
    value = value.toString();
    value = this.fullChar2halfChar(value);
    value = value.replace(/[^\d.-]/g, ''); // 清除“数字”和“.”以外的字符
    value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是.
    value = value.replace(/\./g, '.'); // 只保留第一个. 清除多余的
    value = value.replace(/-/g, '-'); // 只保留第一个. 清除多余的
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    value = value.replace('-', '$#$').replace(/-/g, '').replace('$#$', '-');
    let v1 = value.split('.')[0]; // 处理最大输入位数,正数整数部分最大9位,负数最大8位
    let v2 = value.split('.')[1] || '';
    let v11 = v1.split('');
    if (v1.length >= 11) {
      let v111 = '';
      if (v1.indexOf('-') !== -1) {
        v11.splice(10, 1);
      } else {
        v11.pop();
      }
      v11.map(function (item) {
        v111 += item;
      });
      value = v2 === '' ? v111 : v111 + '.' + v2;
    }
    return value
  },
  setIsTrueMessage (code, message) {
    let isTrueMessage;
    switch (code) {
        case 1:
            isTrueMessage = !!message && message.split('第')[1] ? '第' + message.split('第')[1] : '真';
            break;
        case 2:
            isTrueMessage = '查询超时';
            break;
        case 3:
            isTrueMessage = '该地区查验暂不可用';
            break;
        case 4:
            isTrueMessage = '暂无查询结果';
            break;
        case 5:
            isTrueMessage = '查询服务器报错';
            break;
        case 6:
            isTrueMessage = '查询服务器网络异常';
            break;
        case 7:
            isTrueMessage = '校验码无法识别';
            break;
        case 8:
            isTrueMessage = '发票代码无法识别';
            break;
        case 9:
            isTrueMessage = '发票号码无法识别';
            break;
        case 10:
            isTrueMessage = '超过该张票当天查验次数';
            break;
        case 11:
            isTrueMessage = '发票信息不一致';
            break;
        case 12:
            isTrueMessage = '所查发票不存在';
            break;
        case 13:
            isTrueMessage = '日期当天的不能查验';
            break;
        case 14:
            isTrueMessage = '超过一年的不能查验';
            break;
        case 15:
            isTrueMessage = '已作废';
            break;
        case 250:
            isTrueMessage = '验真中';
            break;
        default:
            isTrueMessage = '暂无查询结果';
            break;
    }
    return isTrueMessage;
  },
  createSettlementTable (startRowNum, endRowNum, data, key, column, accountNameArr, deleteRowIndex) {
    /**
     * 此方法目前适用于FY6050/FY6060/FY6070/FY6080/CB5010/CB5020
     * startRowNum: 起始行数(去掉表头之后)
     * endRowNum: 结束行(去掉表头之后)
     * data: 底稿数据
     * key: 底稿数据中所有键值
     * row: excel中列的字母标识的集合(去掉纵向表头)
     * accountNameArr: 纵向表头集合
     * deleteRowIndex: 是否删除行次一列(GY开头基本上都要删)
     */
    let tableData = [];
    for (let i = startRowNum; i <= endRowNum; i++) {
      let obj = {};
      if (deleteRowIndex) {
        obj['A' + i] = accountNameArr['A' + i];
      } else {
        obj['B' + i] = accountNameArr['B' + i];
      }
      for (let j = 0; j < column.length; j++) {
        obj[column[j] + i] = key.indexOf(column[j] + i) == -1 ? '--' : data[column[j] + i]
      }
      tableData.push(obj);
    }
    return tableData
  },
  fixedNumber (data) {
    let d = data;
    for (let i in d) {
      if (!isNaN(parseFloat(d[i])) && /^-?\d+\.\d{6}$/.test(d[i])) {
        d[i] = parseFloat(d[i]).toFixed(2);
      }
    }
    return d;
  },
  returnAuthorityNum (userType, parentsNav, name) {
        let num = 0;
        let authorityObj = {
            accounting: {
                bills: {
                    bills: 17,
                    outputData: 20,
                    inputData: 22,
                    capitalData: 24,
                    vatInvoice: 26,
                    bankCheck: 27,
                    voucherList: 31,
                    subjectBalance: 34,
                    subsidiaryLedger: 35,
                    subject: 36,
                    auxiliary: 39
                },
                voucher: {
                    voucher: 44,
                    voucherList: 45,
                    subject: 48,
                    auxiliary: 51,
                    subjectBalance: 56,
                    subsidiaryLedger: 57,
                    auxiliaryBalance: 58,
                    voucherSummary: 59,
                    reportBalance: 60,
                    reportProfits: 62, // 利润表
                    businessActivity: 62, // 业务活动表，非盈利组织
                    reportCash: 64
                },
                stock: {
                    inventoryAccounting: 66,
                    quantityAccountingDetail: 67,
                    quantityBalanceSheet: 68,
                    categoryManagement: 69,
                    grossMargins: 70,
                    subjectBalance: 71,
                    subsidiaryLedger: 72,
                    auxiliaryBalance: 73,
                    subject: 74,
                    auxiliary: 77
                },
                fixedAssets: {
                    fixedAssets: 82,
                    intangibleAssets: 83,
                    deferredExpenses: 84,
                    depreciationDetail: 85,
                    disposalRecord: 86,
                    voucher: 87,
                    voucherList: 88,
                    subjectBalance: 91,
                    subsidiaryLedger: 92,
                    subject: 93
                },
                wagesManagement: {
                    wagesManagement: 96,
                    insuranceManagement: 97,
                    staff: 98,
                    wagesDeduction: -1,
                    wagesCalculator: 99,
                    wagesFormula: 100,
                    voucherList: 101,
                    subjectBalance: 104,
                    auxiliaryBalance: 105,
                    subject: 106,
                    auxiliary: 109
                },
                settleAccount: {
                    settleAccount: 114,
                    antiSettleAccount: 116,
                    taxRiskDetection: 117,
                    voucher: 118,
                    voucherList: 119,
                    subjectBalance: 122,
                    subsidiaryLedger: 123,
                    reportBalance: 124,
                    reportProfits: 126, // 利润表
                    businessActivity: 126, // 业务活动表，非盈利组织
                    reportCash: 128,
                    subject: 130,
                    auxiliary: 133
                }
            },
            tax: {
                taxes: {
                    declaration: 138,
                    financial: 139,
                    taxSetting: 140,
                    vatInvoice: 141,
                    wagesManagement: 142,
                    subjectBalance: 143,
                    voucherList: 144,
                    reportBalance: 147,
                    reportProfits: 149,
                    businessActivity: 149,
                    reportCash: 151,
                    reportOwnerEquity: 153
                },
                taxReport: {
                    taxReportInfo: 154,
                    chargeTax: 154,
                    taxSetting: 155,
                    vatInvoice: 156,
                    wagesManagement: 157,
                    subjectBalance: 158,
                    voucherList: 159,
                    reportBalance: 162,
                    reportProfits: 164,
                    businessActivity: 164,
                    reportCash: 166,
                    reportOwnerEquity: 168
                }
            },
            audit: {
                report: {
                    reportBalance: 169,
                    reportProfits: 171,
                    businessActivity: 171,
                    reportCash: 173,
                    reportOwnerEquity: 175,
                    reportIntercourse: 176,
                    reportCost: 177,
                    reportPayments: 178,
                    reportAnnualCheck: 179,
                    voucherList: 180,
                    subjectBalance: 183,
                    subject: 184
                },
                books: {
                    subjectBalance: 187,
                    subsidiaryLedger: 188,
                    generalLedger: 189,
                    multiColumnAccount: 190,
                    auxiliaryBalance: 191,
                    auxiliarySubsidiary: 192,
                    voucher: 193,
                    voucherList: 194,
                    subject: 197,
                    auxiliary: 200
                },
                voucher: {
                    voucherList: 205,
                    chronological: 208,
                    voucherSummary: 209,
                    voucherRelationBill: 210,
                    inputData: 211,
                    outputData: 213,
                    capitalData: 215,
                    subject: 217,
                    auxiliary: 220,
                    voucher: 225,
                    subjectBalance: 226,
                    subsidiaryLedger: 227
                },
                wagesManagement: {
                    wagesManagement: 228,
                    insuranceManagement: 229,
                    staff: 230,
                    voucherList: 231,
                    subjectBalance: 234,
                    subsidiaryLedger: 235,
                    auxiliary: 236
                },
                stock: {
                    quantityAccountingDetail: 241,
                    quantityBalanceSheet: 242,
                    estimateWriteoff: 243,
                    grossMargins: 244,
                    productionCostAllocation: 245,
                    inventoryBills: 246,
                    inventoryNoBills: 247,
                    categoryManagement: 248,
                    voucherList: 249,
                    subjectBalance: 252,
                    subsidiaryLedger: 253
                },
                assets: {
                    fixedAssets: 254,
                    intangibleAssets: 255,
                    deferredExpenses: 256,
                    depreciationDetail: 257,
                    disposalRecord: 258,
                    voucher: 259,
                    voucherList: 260,
                    subjectBalance: 263,
                    subsidiaryLedger: 264,
                    subject: 265
                }
            },
            print: {
                printDownload: {
                    custom: 268,
                    monthData: 269,
                    quarterlyData: 270,
                    halfYearData: 271,
                    yearData: 272
                },
                auditData: {
                    dataTheyear: 273,
                    dataTwoyears: 273,
                    dataThreeyears: 273
                },
                TransactionData: {
                    dataOneyear: 274,
                    dataTwoyears: 274,
                    dataThreeyears: 274
                },
                accountHandover: {
                    dataOneyear: 275,
                    dataTwoyears: 275,
                    dataThreeyears: 275
                }
            },
            finalSettlement: {
                reportForms: {
                    ManuscriptInfo: 276,
                    excel: 277,
                    fsSetting: 278,
                    voucherList: 279,
                    bills: 282,
                    subjectBalance: 283,
                    subject: 284,
                    reportBalance: 287,
                    reportProfits: 289,
                    fixedAssets: 291,
                    quantityBalanceSheet: 292,
                    wagesManagement: 293
                },
                remittanceDeclaration: {
                    settlementDeclaration: 294,
                    fsSetting: 295,
                    voucherList: 296,
                    bills: 299,
                    subjectBalance: 300,
                    subject: 301,
                    reportBalance: 304,
                    reportProfits: 306,
                    fixedAssets: 308,
                    quantityBalanceSheet: 309,
                    wagesManagement: 310
                },
                DeclarationOfSettlement: {
                    DOS: 311,
                    voucherList: 312,
                    bills: 315,
                    subjectBalance: 316,
                    subject: 317,
                    reportBalance: 320,
                    reportProfits: 322,
                    fixedAssets: 324,
                    quantityBalanceSheet: 325,
                    wagesManagement: 326
                }
            }
        };
        if (userType == 'initial') { // 导入期初的路由
            num = 331
        } else if (authorityObj[userType][parentsNav][name]) { // 启动台的路由
            num = authorityObj[userType][parentsNav][name]
        }
        return num
    },
  topPathAuthority (path, authorityArr) { // 模块首个顶级路由权限为否时，匹配模块内首个有权限的页面
        let repath = '';
        let topPathArr = [
            '/dataCenter',
            '/tax/taxes/declaration',
            '/audit/report/reportBalance',
            '/print/printDownload/custom',
            '/finalSettlement/reportForms/ManuscriptInfo'
        ];
        let authorityObj = {
            accounting: {
                bills: {
                    bills: 17,
                    outputData: 20,
                    inputData: 22,
                    capitalData: 24,
                    vatInvoice: 26,
                    bankCheck: 27,
                    voucherList: 31,
                    subjectBalance: 34,
                    subsidiaryLedger: 35,
                    subject: 36,
                    auxiliary: 39
                },
                voucher: {
                    voucher: 44,
                    voucherList: 45,
                    subject: 48,
                    auxiliary: 51,
                    subjectBalance: 56,
                    subsidiaryLedger: 57,
                    auxiliaryBalance: 58,
                    voucherSummary: 59,
                    reportBalance: 60,
                    reportProfits: 62, // 利润表
                    businessActivity: 62, // 业务活动表，非盈利组织
                    reportCash: 64
                },
                stock: {
                    inventoryAccounting: 66,
                    quantityAccountingDetail: 67,
                    quantityBalanceSheet: 68,
                    categoryManagement: 69,
                    grossMargins: 70,
                    subjectBalance: 71,
                    subsidiaryLedger: 72,
                    auxiliaryBalance: 73,
                    subject: 74,
                    auxiliary: 77
                },
                fixedAssets: {
                    fixedAssets: 82,
                    intangibleAssets: 83,
                    deferredExpenses: 84,
                    depreciationDetail: 85,
                    disposalRecord: 86,
                    voucher: 87,
                    voucherList: 88,
                    subjectBalance: 91,
                    subsidiaryLedger: 92,
                    subject: 93
                },
                wagesManagement: {
                    wagesManagement: 96,
                    insuranceManagement: 97,
                    staff: 98,
                    wagesDeduction: -1,
                    wagesCalculator: 99,
                    wagesFormula: 100,
                    voucherList: 101,
                    subjectBalance: 104,
                    auxiliaryBalance: 105,
                    subject: 106,
                    auxiliary: 109
                },
                settleAccount: {
                    settleAccount: 114,
                    antiSettleAccount: 116,
                    taxRiskDetection: 117,
                    voucher: 118,
                    voucherList: 119,
                    subjectBalance: 122,
                    subsidiaryLedger: 123,
                    reportBalance: 124,
                    reportProfits: 126, // 利润表
                    businessActivity: 126, // 业务活动表，非盈利组织
                    reportCash: 128,
                    subject: 130,
                    auxiliary: 133
                }
            },
            tax: {
                taxes: {
                    declaration: 138,
                    financial: 139,
                    taxSetting: 140,
                    vatInvoice: 141,
                    wagesManagement: 142,
                    subjectBalance: 143,
                    voucherList: 144,
                    reportBalance: 147,
                    reportProfits: 149,
                    businessActivity: 149,
                    reportCash: 151,
                    reportOwnerEquity: 153
                },
                taxReport: {
                    taxReportInfo: 154,
                    chargeTax: 154,
                    taxSetting: 155,
                    vatInvoice: 156,
                    wagesManagement: 157,
                    subjectBalance: 158,
                    voucherList: 159,
                    reportBalance: 162,
                    reportProfits: 164,
                    businessActivity: 164,
                    reportCash: 166,
                    reportOwnerEquity: 168
                }
            },
            audit: {
                report: {
                    reportBalance: 169,
                    reportProfits: 171,
                    businessActivity: 171,
                    reportCash: 173,
                    reportOwnerEquity: 175,
                    reportIntercourse: 176,
                    reportCost: 177,
                    reportPayments: 178,
                    reportAnnualCheck: 179,
                    voucherList: 180,
                    subjectBalance: 183,
                    subject: 184
                },
                books: {
                    subjectBalance: 187,
                    subsidiaryLedger: 188,
                    generalLedger: 189,
                    multiColumnAccount: 190,
                    auxiliaryBalance: 191,
                    auxiliarySubsidiary: 192,
                    voucher: 193,
                    voucherList: 194,
                    subject: 197,
                    auxiliary: 200
                },
                voucher: {
                    voucherList: 205,
                    chronological: 208,
                    voucherSummary: 209,
                    voucherRelationBill: 210,
                    inputData: 211,
                    outputData: 213,
                    capitalData: 215,
                    subject: 217,
                    auxiliary: 220,
                    voucher: 225,
                    subjectBalance: 226,
                    subsidiaryLedger: 227
                },
                wagesManagement: {
                    wagesManagement: 228,
                    insuranceManagement: 229,
                    staff: 230,
                    voucherList: 231,
                    subjectBalance: 234,
                    subsidiaryLedger: 235,
                    auxiliary: 236
                },
                stock: {
                    quantityAccountingDetail: 241,
                    quantityBalanceSheet: 242,
                    estimateWriteoff: 243,
                    grossMargins: 244,
                    productionCostAllocation: 245,
                    inventoryBills: 246,
                    inventoryNoBills: 247,
                    categoryManagement: 248,
                    voucherList: 249,
                    subjectBalance: 252,
                    subsidiaryLedger: 253
                },
                assets: {
                    fixedAssets: 254,
                    intangibleAssets: 255,
                    deferredExpenses: 256,
                    depreciationDetail: 257,
                    disposalRecord: 258,
                    voucher: 259,
                    voucherList: 260,
                    subjectBalance: 263,
                    subsidiaryLedger: 264,
                    subject: 265
                }
            },
            print: {
                printDownload: {
                    custom: 268,
                    monthData: 269,
                    quarterlyData: 270,
                    halfYearData: 271,
                    yearData: 272
                },
                auditData: {
                    dataTheyear: 273,
                    dataTwoyears: 273,
                    dataThreeyears: 273
                },
                TransactionData: {
                    dataOneyear: 274,
                    dataTwoyears: 274,
                    dataThreeyears: 274
                },
                accountHandover: {
                    dataOneyear: 275,
                    dataTwoyears: 275,
                    dataThreeyears: 275
                }
            },
            finalSettlement: {
                reportForms: {
                    ManuscriptInfo: 276,
                    excel: 277,
                    fsSetting: 278,
                    voucherList: 279,
                    bills: 282,
                    subjectBalance: 283,
                    subject: 284,
                    reportBalance: 287,
                    reportProfits: 289,
                    fixedAssets: 291,
                    quantityBalanceSheet: 292,
                    wagesManagement: 293
                },
                remittanceDeclaration: {
                    settlementDeclaration: 294,
                    fsSetting: 295,
                    voucherList: 296,
                    bills: 299,
                    subjectBalance: 300,
                    subject: 301,
                    reportBalance: 304,
                    reportProfits: 306,
                    fixedAssets: 308,
                    quantityBalanceSheet: 309,
                    wagesManagement: 310
                },
                DeclarationOfSettlement: {
                    DOS: 311,
                    voucherList: 312,
                    bills: 315,
                    subjectBalance: 316,
                    subject: 317,
                    reportBalance: 320,
                    reportProfits: 322,
                    fixedAssets: 324,
                    quantityBalanceSheet: 325,
                    wagesManagement: 326
                }
            }
        };
        // if (topPathArr.indexOf(path) != -1) {
        let splitArr = path.split('/');
        let userType = splitArr[1];
        let parentsNav = splitArr[2];
        let name = splitArr[3];
        let obj = authorityObj[userType];
        let index = Object.keys(obj).indexOf(parentsNav); // 获取当前2级导航的索引
        Object.keys(obj).some(key => {
            // 找到当前导航之后的第一个权限值
            if (Object.keys(obj).indexOf(key) >= index) {
                return Object.keys(obj[key]).some(k => {
                    if (!!obj[key][k] && authorityArr.indexOf(obj[key][k]) != -1) {
                        parentsNav = key;
                        name = k;
                        repath = '/' + userType + '/' + parentsNav + '/' + name
                        return true;
                    };
                })
            }
        })
        // }
        return repath
    }
}
