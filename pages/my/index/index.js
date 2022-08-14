const app = getApp()

Page({
  data: {
    useTime: 0,
    surplusTime: 0,
    isSignIn: false,
    card: [],
    list: [
      // { "name": "电子就诊卡", "url": "/pages/my/info/index" },
      { "name": "我的挂号", "url": "/pages/hospital/appoint-list/index" },
      { "name": "缴费记录", "url": "/pages/hospital/payment/index" }
      // { "name": "我的病例", "url": "/pages/hospital/case/index" }
    ]
  },

  onLoad() {

  },

  toInfoPage(){
    wx.navigateTo({
      url: '/pages/my/info/index',
    })
  },

  logout(){
    app.globalData.token = null
    app.globalData.userInfo = null
    this.setData({
      member: null
    })
  },

  tabNav: function(e){
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    })
  },

  onShow() {
    if (!app.globalData.token) {
      return;
    }

    this.getMember();
  },

  getMember: function () {
    var that = this;
    wx.request({
      url: app.globalData.domain + '/api/member/info',
      data: {
        token: app.globalData.token
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            member: res.data.member
          })
        }
      }
    })
  },
  
  login: function(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  }

})