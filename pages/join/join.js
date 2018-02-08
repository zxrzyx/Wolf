//join.js
const util = require('../../utils/util.js')

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