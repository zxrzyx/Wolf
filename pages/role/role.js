//role.js
const util = require('../../utils/util.js')

Page({
  data: {
    checkboxItems: [
      { name: '预言家', value: '0' },
      { name: '女巫', value: '1' },
      { name: '猎人', value: '2' },
      { name: '白痴', value: '3' },
      { name: '守卫', value: '4' },
      { name: '熊', value: '5' },
    ],

    wolfItems: [
      { name: '白狼王', value: '0' },
      { name: '黑狼王(狼枪)', value: '1' },
      { name: '狼美人', value: '2' },
      { name: '恶魔', value: '3' }
    ],

    modeItems: [
      { name: '屠边', value: '0' },
      { name: '屠城(建议新人较多时选择)', value: '1' }
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