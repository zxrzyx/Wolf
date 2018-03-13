//choosemode.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  recommandMode: function () {
    wx.navigateTo({
      url: '../recommand/recommand'
    })
  },

  selfChoose: function () {
    wx.navigateTo({
      url: '../role/role'
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
