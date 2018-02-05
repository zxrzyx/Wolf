//role.js
const util = require('../../utils/util.js')

Page({
  data: {
  },
  onLoad: function () {
  },

  onShareAppMessage: function () {
    return {
      title: '狼人杀代理上帝',
      desc: '黑色的夜给了我黑色的眼睛，我却用它来寻找狼人',
      path: '/index/index'
    }
  }
})