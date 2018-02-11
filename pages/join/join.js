//join.js
const util = require('../../utils/util.js')

var host = 'https://ncg0gdc4.qcloud.la/weapp/message'

Page({
  data: {
    grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "Del"],
    number: 1,
    roomId: ""
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
    if (roomIndex.length == 6) {
      
      wx.request({
        url: host,
        dataType: 'json',
        method: 'GET',
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
        url: '../number/number',
      })
    }
  },

  chooseNumber: function () {
    wx.navigateTo({
      url: '../join/join',
    })
  },

})