//role.js
const util = require('../../utils/util.js')

Page({
  data: {
    checkboxItems: [
      { name: '预言家', value: '0' },
      { name: '女巫', value: '1' }
    ],
  },
  onLoad: function () {
  },

  chooseNumber: function() {
    wx.navigateTo({
      url: '../number/number',
    })
  },

  onShareAppMessage: function () {
    return {
      title: '狼人杀代理上帝',
      desc: '黑色的夜给了我黑色的眼睛，我却用它来寻找狼人',
      path: '/index/index'
    }
  }
})