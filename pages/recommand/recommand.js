//recommand.js
const util = require('../../utils/util.js');
const app = getApp();

var recommandRole_12 = [
  { name: '预女猎白', value: '0', checked: 'true'},
  { name: '预女猎白混血儿', value: '1' },
  { name: '预女猎守白狼王', value: '2' },
  { name: '预女猎守恶魔', value: '3' },
  { name: '预女猎守狼枪', value: '4' },
  { name: '预女猎守狼美人', value: '5' },
  { name: '熊女猎白', value: '6' },
];

var recommandRole_9 = [
  { name: '预女猎', value: '0', checked: 'true'},
  { name: '预女丘比特', value: '1' },
  { name: '预女锈剑骑士', value: '2' },
  { name: '预女禁言长老', value: '3' },
  { name: '熊女猎屠城', value: '4' },
];

Page({
  data: {
    checkboxItems: [
      // { name: '预言家', value: '预' },
      // { name: '女巫', value: '女' },
      // { name: '猎人', value: '猎' },
      // { name: '白痴', value: '白' },
      // { name: '守卫', value: '守' },
      // { name: '熊', value: '熊' },
    ],

    userInfo: {},
    hasUserInfo: false,
    memberCount: 12,
    hide_condition: false,

    content: "",
  },
  onLoad: function () {
  },

  chooseNumber: function () {
    var info = this.data.content;
    var host = 'https://ncg0gdc4.qcloud.la/weapp/message';
    var master = this.data.userInfo;
    
    wx.showModal({
      title: '确认板子信息',
      content: info,
      success: function (res) {
        if (res.confirm) {
          var randomNumber = Math.ceil(Math.random() * 10 * 100000);
          wx.request({
            url: host,
            data: {
              roomId: randomNumber,
              info: info,
              userInfo: app.globalData.userInfo,
            },
            dataType: 'json',
            method: 'POST',
            success: function (res) {
              console.log(res.data);
            },
            fail: function (res) {
              console.log('submit fail');
            },
            complete: function (res) {
              console.log('submit complete');
            }
          })

          // wx.navigateTo({
          //   url: '../number/number?roomid=' + randomNumber + '&master=' + JSON.stringify(master) + '&role=' + info + '&gamer=' + JSON.stringify(null),
          // })
          wx.navigateTo({
            url: '../room/room',
          })
        } else {
          //Do nothing
        }
      }
    })
  },

  checkboxChange: function (e) {
    var items = this.data.checkboxItems;
    var values = e.detail.value;
    var content = "";

    for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      for (let j = 0; j < values.length; j++) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
          content += items[i].name;
        }
      }
    }

    this.setData({
      checkboxItems: items,
      content: content,
    })
  },

  memberCount: function(e) {
    this.setData({
      memberCount: e.detail.value,
    })
  },

  updateRole: function(e) {
    var count = this.data.memberCount;
    if(count == 12) {
    this.setData({
        checkboxItems: recommandRole_12,
        hide_condition: true,
      })
    } else {
      this.setData({
        checkboxItems: recommandRole_9,
        hide_condition: true,
      })
    }
  },

  onShareAppMessage: function () {
    return {
      title: '狼人杀代理上帝',
      desc: '黑色的夜给了我黑色的眼睛，我却用它来寻找狼人',
      path: '/index/index'
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})