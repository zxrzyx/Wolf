//join.js
const util = require('../../utils/util.js')

var host = 'https://ncg0gdc4.qcloud.la/weapp/message'

Page({
  data: {
    grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "Del"],
    number: 1,
    roomId: "",
    info: "",
    master: {},
    userInfo: {},
    gamer: [],
  },
  onLoad: function () {
  },

  onShow: function () {
    var that = this;
    that.setData({
      roomId: ""
    })
  },

   clickRoomNumber: function(e) {
    var that = this;
    var index = e.currentTarget.id;
    var roomIndex = this.data.roomId;
    if(index == "Del") {
      if (roomIndex != "") {
        roomIndex = roomIndex.substring(0, roomIndex.length - 1);
      }
    } else {
      roomIndex = roomIndex + index;
    }

    that.setData({
      roomId: roomIndex
    })

    console.log(roomIndex);
    
    if(roomIndex.length == 6) {
      this.getWxReturn(roomIndex);
    }
  },

  getWxReturn: function(index) {
    var role = "N/A";
    var gamer = [];
    var master = {};
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: host,
        dataType: 'json',
        data: { roomId: index },
        method: 'GET',
        success: function (res) {
          console.log(index);
          var result = res.data;
          if (result != null) {
            master = result.master;
            role = result.role;
            gamer = result.gamer;
            console.log(result);
          } else {
            roomIndex = 0;
          }
        },
        fail: function (res) {
          console.log('submit fail');
        },
        complete: function (res) {
          wx.navigateTo({
            url: '../number/number?roomid=' + index + '&master=' + JSON.stringify                 (master) + '&role=' + role + '&gamer=' + JSON.stringify(gamer),
          });
          console.log('submit complete');
        }
      })
    }).then(() => {
      // wx.navigateTo({
      //   url: '../number/number?roomid=' + index,
      // })
    });
  },

  chooseNumber: function () {
    wx.navigateTo({
      url: '../join/join',
    })
  },

})