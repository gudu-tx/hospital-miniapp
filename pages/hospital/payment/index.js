// pages/order/order-pay/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    paymentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPayment();
  },

  getPayment: function (id) {
    var that = this;
    if(!app.globalData.userInfo){
      wx.showToast({
        title: '请登录账号',
        icon: 'none',
        duration: 1500
      })
      return false
    }else if( app.globalData.userInfo.realName == null){
      wx.showToast({
        title: '请完善个人信息账号',
        icon: 'none',
        duration: 1500
      })
      return false
    }
    wx.request({
      url: app.globalData.domain + '/api/payment/list',
      data: {
        realName:app.globalData.userInfo.realName
      },
      header: {
        token: app.globalData.token,
      },
      success: function (res) {
        that.setData({
          paymentList: res.data.paymentList
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