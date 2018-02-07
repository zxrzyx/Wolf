//number..js

var randomNumber = Math.ceil(Math.random() * 10 * 100000);

Page({
  data: {
    text : randomNumber,
  },
  
  onLoad: function () {
  },

  onShareAppMessage: function () {
    return {
      title: '狼人杀代理上帝',
      desc: '黑色的夜给了我黑色的眼睛，我却用它来寻找狼人',
      path: '/number/number'
    }
  }
})