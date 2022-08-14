// pages/hospital/hospital-detail/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    hospital: {},
    hospitalNum: 0,
    shopCart: [],
    specName: ''
  },

  changeSpec(e){
    this.setData({
      specName: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getHospital(options.id);
    this.getDoctor(options.id);
  },

  userDetail(e){
    wx.navigateTo({
      url: '/pages/hospital/doctor-detail/index?id='+e.currentTarget.dataset.id,
    })
  },

  getDoctor: function (hospitalId) {
    var that = this;
    
    wx.request({
      url: app.globalData.domain + '/api/doctor/list',
      data: {
        hospitalId: hospitalId
      },
      success: function (res) {
        that.setData({
          doctorList: res.data.doctorList,
        });
        console.log('初始化--->', hospitalId)
      }
    })

  },

  getHospital: function (hospitalId) {
    var that = this;
    wx.request({
      url: app.globalData.domain + '/api/hospital/detail',
      data: {
        id: hospitalId
      },
      success: function (res) {
        that.setData({
          hospital: res.data.hospital,
        });
      }
    })

  },

  getPhoneNumber: function (e) {
    console.log(e)
    var encryptedData = "";
    var iv = "";
    if (e.detail.encryptedData) {
      encryptedData = e.detail.encryptedData;
      iv = e.detail.iv;
    }
    wx.navigateTo({
      url: "/pages/order/appoint-add/index?id=" + e.currentTarget.dataset.id + "&encryptedData=" + encryptedData + "&iv=" + iv
    })
  },


  tapBuy: function(e){
    var that = this;
    if (!app.globalData.token) {
      wx.navigateTo({
        url: '/pages/login/index',
      })
      return;
    }
    
    wx.navigateTo({
      url: '/pages/hospital/appoint/index?hospitalId=' + that.data.hospital.id,
    })
    return;
    var hospitalList = [{
      id: this.data.hospital.id,
      hospitalName: this.data.hospital.hospitalName,
      picUrl: this.data.hospital.picUrl,
      num: 1,
      specName: this.data.specName,
      price: this.data.hospital.price
    }];
    wx.navigateTo({
      url: '/pages/order/order-confirm/index?hospitalList=' + JSON.stringify(hospitalList),
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