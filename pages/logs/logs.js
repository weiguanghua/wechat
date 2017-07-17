//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: ["高欢","吴广"]
  },
  onLoad: function (opt) {
    console.log(opt);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  goBack(log) {
    wx.navigateBack(log)
  }
})
