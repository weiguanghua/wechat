var app = getApp();//或许的当前小程序的实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userId: "CD170101",
    userName: "彭双",
    bool: 1,
    arr: [
      { name: "窦一" }, { name: "彭二" }, { name: "黄三" }
    ],
    flag: true,
    imgUrls: [
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2030965026,1272976928&fm=214&gp=0.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    x: 0,
    y: 0,
    array: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国' },
      { name: 'BRA', value: '巴西' }
    ],
    index: 0,
    years: ['2016', '2017', '2018', '2019'],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    year: "2017",
    month: "7",
    day: "11",
    value: [1, 6, 10]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { //页面的钩子当中只有onload才有参数
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globalData);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("我被隐藏了");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("我要刷新了！");
    setTimeout(() => {
      wx.stopPullDownRefresh() //告诉小程序已经刷新好了，赶紧帮我收起来！
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { //加载更多用的，当内容的高度大于了页面的高度，拉到页面的底部时触发
    console.log("我被拉了！")
  },
  onShareAppMessage: function () {
    return {
      title: '如果更不上了！就去1702',
      path: '/page/user?id=123'
    }
  },
  route: 'user',
  handleClick(event) {
    console.log(event.target)
    this.setData({
      userName: "迪根"
    })
  },
  handleName(event) {
    console.log(event.target.dataset);
  },
  goIndex() {
    wx.reLaunch({
      url: '/pages/logs/logs?like=正鑫', //两个页面跳转的时候传参数
    })
  },
  lower() {

    if (this.data.flag) {

      this.setData({
        flag: false
      })

      console.log("快到底了！");

      setTimeout(() => {
        this.setData({
          flag: true
        }, 1000)
      })
    }

  },
  scroll(event) {
    console.log(event.detail)
  },
  swiperchange({detail}) {
    console.log(detail.current)
  },
  formSubmit({detail}) {
    console.log(detail.value)
  },
  checkChange({detail}) {
    console.log(detail.value)
  },
  handleInput({detail}) {
    this.setData({
      userName: detail.value
    })
  },
  handleConfirm() {
    console.log(222)
  },
  handlePick({detail}) {
    //console.log(detail.value)

    this.setData({
      index: detail.value
    })
  },
  bindPickerViewChange({detail}) {
    this.setData({
      value: detail.value
    })
    this.setData({
      year: this.data.years[detail.value[0]],
      month: this.data.months[detail.value[1]],
      day: this.data.days[detail.value[2]]
    })
  },
  handleSlider({detail}) {
    console.log(detail.value)
  }
})