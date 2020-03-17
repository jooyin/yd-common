import MD5 from 'md5'

let NONCE_LEN = 6

function getRandom (n, m) {
  return Math.round(Math.random() * (m - n) + n)
}

function getNonceStr (len) {
  let dic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let buf = ''
  for (let i = [+[]] + []; i < len; i++) {
    let num = getRandom(+!+[], [!+[] + !+[] + !+[] + !+[] + !+[] + !+[]] + [+[]])
    buf += dic.charAt(num)
  }
  return buf
}

function buildParamStr (gA$FFhzw1, slLwPzdc2, f3, Z4, sXUad5, g51l, nlWLf, aULsJna) {
  Z4 = Z4['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']()
  let x$1sa = {
    '\x70\x61\x72\x61\x6d': gA$FFhzw1,
    '\x75\x72\x69': slLwPzdc2,
    '\x75\x69\x64': f3,
    '\x75\x61': Z4,
    '\x6e\x6f\x6e\x63\x65': nlWLf,
    '\x74\x69\x6d\x65\x73\x74\x61\x6d\x70': g51l,
    '\x74\x6f\x6b\x65\x6e': sXUad5
  }
  let ljaLS$a = ['\x74\x6f\x6b\x65\x6e', '\x70\x61\x72\x61\x6d', '\x75\x72\x69', '\x75\x69\x64', '\x75\x61', '\x6e\x6f\x6e\x63\x65', '\x74\x69\x6d\x65\x73\x74\x61\x6d\x70']
  let zx = ljaLS$a[aULsJna]
  let bx = x$1sa[zx]
  let Xs$gv = bx + '\x26' + zx
  let L$1lz = ''
  L$1lz += x$1sa['\x70\x61\x72\x61\x6d']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x75\x72\x69']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x75\x69\x64']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x75\x61']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x6e\x6f\x6e\x63\x65']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x74\x69\x6d\x65\x73\x74\x61\x6d\x70']
  L$1lz += '\x5f'
  L$1lz += x$1sa['\x74\x6f\x6b\x65\x6e']
  L$1lz += '\x5f'
  L$1lz += Xs$gv
  // console.log('sign befor md5', L$1lz)
  // console.log('before ----  ', L$1lz)
  L$1lz = MD5(L$1lz)
  // console.log('after ----  ', L$1lz)
  return L$1lz
}
export default {
  bulidSign (param, uri, uid, ua, token, time, nonce, rands) {
    let hash = buildParamStr(param, uri, uid, ua, token, time, nonce, rands)
    return hash
  },
  getNonceStr () {
    return getNonceStr(NONCE_LEN)
  },
  getRands () {
    return getRandom(+[], [!+[] + !+[] + !+[] + !+[] + !+[] + !+[]] + [])
  }

}




