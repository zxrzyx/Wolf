//number..js

Page({
  data: {
    text : "000000",
    master: {},
    info: "N/A",
    gamer: [],
  },
  
  onLoad: function (options) {
    this.setData({
      text: options.roomid,
      master: JSON.parse(options.master),
      info: options.role,
      gamer: JSON.parse(options.gamer),
    })
    console.log(this.data.master.nickName);
  },

  onShareAppMessage: function () {
    return {
      title: '狼人杀代理上帝',
      desc: '黑色的夜给了我黑色的眼睛，我却用它来寻找狼人',
      path: '/number/number'
    }
  }
})