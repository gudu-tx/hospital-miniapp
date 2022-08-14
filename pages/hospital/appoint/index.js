// pages/appoint/index.js
const app = getApp();
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    gender: 1,
    userList: [],
    userIndex: 0,
    time: '09:00'
  },

  changeDate(e){
    this.setData({
      date: e.detail.value
    })
  },

  changeTime(e) {
    console.log(e)
    this.setData({
      time: e.detail.value
    })
  },

  bindUserChange(e){
    this.setData({
      userIndex: e.detail.value
    })
  },

  genderChange: function(e){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util.formatDate(new Date()))
    this.setData({
      date: util.formatDate(new Date()),
      id: options.doctorId,
      deptId: options.deptId
    })

    var that = this;
    wx.request({
      url: app.globalData.domain + '/api/doctor/detail',
      data: {
        id: options.doctorId
      },
      success: function (res) {
        that.setData({
          project: res.data.doctor
        })
      }
    })

    this.getUser();
  },

  getUser(e){
    var that = this;
    console.log('fsdfsafsdafsadf', e)
    wx.request({
      url: app.globalData.domain + '/api/doctor/list',
      data: {
        type: 2
      },
      success: function (res) {
        that.setData({
          userList: res.data.doctorList
        })
      }
    })
  },

  saveAppoint: function(e){
    if (!app.globalData.token) {
      wx.navigateTo({
        url: '/pages/login/index',
      })
      return;
    }
    var that = this;
    var realName = e.detail.value.realName;
    var mobile = e.detail.value.mobile;
    var remark = e.detail.value.remark;
    var gender = this.data.gender;
    var appointTime = this.data.date + ' ' + this.data.time;
    var hospitalId = this.data.project.hospitalId;
    var doctorId = this.data.project.id;
    var deptId = this.data.project.deptId;
    
    wx.showLoading();
    wx.request({
      url: app.globalData.domain + '/api/register/save',
      header: {
        token: app.globalData.token
      },
      method: "POST",
      data: {
        realName: realName,
        mobile: mobile,
        hospitalId: hospitalId,
        remark: remark,
        appointTime: appointTime,
        doctorId: doctorId,
        deptId: deptId
      },
      success: (res) => {
        if(res.data.code == 0){
          wx.navigateTo({
            url: '/pages/hospital/pay/index?id='+res.data.id,
          })
        }
      },
      complete: (res) => {
        wx.hideLoading();
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