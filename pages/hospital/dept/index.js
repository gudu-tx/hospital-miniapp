// pages/order/order-pay/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    deptList: [{
      icon:"waike-copy"
    },
    {
      icon:"neike--copy"
    },
    {
      icon:"erke----copy"
    },
    {
      icon:"tubiao_-1-copy"
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDept();
  },

  toDetail(e){
    var id = e.currentTarget.dataset.id;
    console.log('id---->', id)
    wx.navigateTo({
      url: '/pages/hospital/doctor-list/index?deptId='+id,
    })
  },

  getDept: function (id) {
    var that = this;
    wx.request({
      url: app.globalData.domain + '/api/dept/list',
      data: {
      },
      header: {
        token: app.globalData.token
      },
      success: function (res) {
        that.setData({
          deptList: res.data.deptList
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