const createNav = (id, GLOBAL, system) => {
  let customerId = id || '123456'
  let nav = [
      {
        'name': '概况',
        'iconClass': 'iconfont icongaikuang1',
        'url': GLOBAL.prefix + '/index?customerId=' + customerId + '&t=1',
        'child': {}
      },
      {
        'name': '凭证',
        'iconClass': 'iconfont iconpingzheng1',
        'url': '',
        'child': {
          'alias': '凭证管理',
          'data': [
            {'name': '智能凭证',
              'child': [
                {'name': '数据中心', 'url': GLOBAL.prefix + '/dataCenter?customerId=' + customerId}
              ]
            },
            {'name': '手工凭证',
              'child': [
                {'name': '新增凭证', 'url': GLOBAL.prefix + '/voucher?customerId=' + customerId},
                {'name': '凭证审核', 'url': GLOBAL.prefix + '/voucherAudit?customerId=' + customerId}
              ]
            },
            {'name': '查凭证',
              'child': [
                {'name': '凭证列表', 'url': GLOBAL.prefix + '/voucherList?customerId=' + customerId},
                {'name': '序时账', 'url': GLOBAL.prefix + '/chronological?customerId=' + customerId},
                {'name': '凭证汇总表', 'url': GLOBAL.prefix + '/voucherSummary?customerId=' + customerId},
                {'name': '凭证票据关联', 'url': GLOBAL.prefix + '/voucherRelationBill?customerId=' + customerId}
              ]
            },
            {'name': '结账',
              'child': [
                {'name': '结账', 'url': GLOBAL.prefix + '/settleAccount?customerId=' + customerId},
                {'name': '反结账', 'url': GLOBAL.prefix + '/antiSettleAccount?customerId=' + customerId}
              ]
            }
          ]
        }
      },
      {
        'name': '导入',
        'iconClass': 'iconfont iconlishidaoru2',
        'url': GLOBAL.prefix + '/importInitial?customerId=' + customerId + '&t=1',
        'child': {}
      }
    ]
    return nav
  }
  export default createNav