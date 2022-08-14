// pages/appointList/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAppoint()
  },

  cancel(e){
    var that = this;
    var id = e.currentTarget.dataset.id
    wx.request({
      url: app.globalData.domain + '/api/register/delete',
      data: {
        token: app.globalData.token,
        id: id
      },
      success: (res) => {
        if (res.data.code == 0) {
          that.getAppoint()
        } else {
          
        }
      }
    })
  },

  getAppoint: function(){
    var that = this;
    console.log('app.globalDataapp.globalData', app.globalData)
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
      url: app.globalData.domain + '/api/register/list',
      data: {
        token: app.globalData.token,
        realName:app.globalData.userInfo.realName
      },
      success: (res) => {
        if (res.data.code == 0) {
          that.setData({
            appointList: res.data.registerList
          });
        } else {
          
        }
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