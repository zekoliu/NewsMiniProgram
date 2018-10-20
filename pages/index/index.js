Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [],
    imagepath: '',
    title: '',
    author: '',
    time: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData('gn')
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getData(typeStr) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: typeStr
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        let result = res.data.result
        console.log(result)
        this.setData({
          newsList:result
        })
        complete: () => {
          callback && callback();
        }
      }
    }) 
  },

  onPullDownRefresh() {
    this.getData(() => {
      wx.stopPullDownRefresh();
    })
  },

  domesticData() {
    let typeStr = 'gn'
    this.getData(typeStr)
  },

  internationaltData() {
    let typeStr = 'gj'
    this.getData(typeStr)
  },

  financeData() {
    let typeStr = 'cj'
    this.getData(typeStr)
  },

  entertainmentData() {
    let typeStr = 'yl'
    this.getData(typeStr)
  },

  militaryData() {
    let typeStr = 'js'
    this.getData(typeStr)
  },

  pysicalEducationData() {
    let typeStr = 'ty'
    this.getData(typeStr)
  },

  otherData() {
    let typeStr = 'other'
    this.getData(typeStr)
  },

  onNewsDetails() {   //跳转函数
    wx.navigateTo({
      url: '/pages/details/details'
    })
  }
})