// pages/hospital/doctor-list/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDoctor()
  },

  
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    this.getDoctor();
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    this.getDoctor();
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  detail(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/hospital/doctor-detail/index?id=' + id,
    })
  },

  getDoctor: function () {
    var that = this;
    wx.request({
      url: app.globalData.domain + '/api/doctor/list',
      data: {
        realName: that.data.inputVal
      },
      success: function (res) {
        that.setData({
          doctorList: res.data.doctorList
        });
      }
    })
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

  }
})