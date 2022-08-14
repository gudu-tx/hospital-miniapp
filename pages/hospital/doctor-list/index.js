// pages/hospital/doctor-list/index.js
const app = getApp()
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
    let id = options.deptId
    console.log('options', options)
    this.getStore(id)
  },

  detail(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/hospital/doctor-detail/index?id=' + id,
    })
  },

  getStore: function (e) {
    var that = this;

    console.log('初始化--->', e)
    wx.request({
      url: app.globalData.domain + '/api/doctor/list',
      data: {
      },
      success: function (res) {
        let temp = []
        if(res.data.doctorList.length > 0){
          res.data.doctorList.forEach(item=>{
            if(item.deptId == e){
              temp.push(item)
            }
          })
        }
        that.setData({
          doctorList: temp
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