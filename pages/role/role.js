//role.js
const util = require('../../utils/util.js')

Page({
  data: {
    checkboxItems: [
      { name: '预言家', value: '预'},
      { name: '女巫', value: '女' },
      { name: '猎人', value: '猎' },
      { name: '白痴', value: '白' },
      { name: '守卫', value: '守' },
      { name: '熊', value: '熊' },
    ],

    wolfItems: [
      { name: '白狼王', value: '白狼' },
      { name: '黑狼王(狼枪)', value: '狼枪' },
      { name: '狼美人', value: "狼美"},
      { name: '恶魔', value: '恶魔' }
    ],

    modeItems: [
      { name: '屠边局', value: '0' },
      { name: '屠城局(建议新人较多时选择)', value: '1' }
    ],

    contentGod: "",
    contentWolf: "",
    contentCount: 0,
  },
  onLoad: function () {
  },

  chooseNumber: function() {
    var god = this.data.contentGod;
    var wolf = this.data.contentWolf;
    var host = 'https://ncg0gdc4.qcloud.la/weapp/message';
    var mode = '屠城';
    var eggCount = 4;
    if(god == "" || god == null) {
      wx.showModal({
        content: '请选择足够的神牌',
        showCancel: false,
      })
      return;
    } else if (mode == null || mode == "") {
      wx.showModal({
        content: '请选择游戏模式',
        showCancel: false,
      })
      return;
    }
    wx.showModal({
      title: '确认板子信息',
      content: god + " " + wolf +" " + eggCount + "村民\r\n" + mode,
      success: function(res) {
        if (res.confirm) {
          var randomNumber = Math.ceil(Math.random() * 10 * 100000);
          wx.request({
            url: host,
            data: {
              roomId: randomNumber,
              info: god,
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
          
          wx.navigateTo({
            url: '../number/number?room=' + randomNumber,
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

    for(let i = 0; i < items.length; i++) {
      items[i].checked = false;
      for(let j = 0; j < values.length; j++) {
        if(items[i].value == values[j]) {
          items[i].checked = true;
          content += items[i].value;
        }
      }
    }

    this.setData({
      checkboxItems : items,
      contentGod: content,
    })
  },

  wolfCheckboxChange: function (e) {
    var items = this.data.wolfItems;
    var values = e.detail.value;
    var content = "";

    for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      for (let j = 0; j < values.length; j++) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
          content += items[i].value;
        }
      }
    }

    this.setData({
      wolfItems: items,
      contentWolf: content,
    })
  },

  modeCheckboxChange: function (e) {
    var items = this.data.modeItems;
    var values = e.detail.value;

    for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      for (let j = 0; j < values.length; j++) {
        if (items[i].value == values[j]) {
          items[i].checked = true;
        }
      }
    }

    this.setData({
      modeItems: items
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