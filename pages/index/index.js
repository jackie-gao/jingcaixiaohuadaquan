//index.js
//获取应用实例
const app = getApp()

Page({
  resppp:{},
  data: {
    motto: '点击按钮随机出笑话',
    keyWords:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //获取用户输入的关键词
  bindHideKeyboard: function (e) {
    this.setData({
      keyWords: e.detail.value
    })
  },
  //事件处理函数
  zhougongyixia:function(){
    console.log('输入的关键词是666：', this.data.keyWords)
    var userinputword = this.data.keyWords
    // if (this.data.keyWords == ''){

    //   wx.showToast({
    //     title: '没填关键词呢！',
    //     icon: 'none',
    //     duration: 2000
    //   })
      
    // }else{
    
          //ok,接下来进行页面跳转，要将这些值传递到B页面
          wx.navigateTo({
            url: '../detail/detail'
          })
        
    // }
    
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //转发
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '转发',
      path: '/pages/index/index',
      success: function (res) { }
    }
  }
})