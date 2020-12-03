// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataname: '',
    fadd: 'kkkk',
    list: [],
    textdata: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this;
    var ramnumber = Math.random()*50 + 1;
    this.setData({
      dataname: options.dataname,
      fadd: 'gggggddd'
    })

    console.log('我们收到的数据' + options.dataname)
    console.log(options.dataname)

    wx.request({
      url: 'https://api.jisuapi.com/xiaohua/text?pagenum=' + ramnumber + '&pagesize=5&sort=addtime&appkey=fad8bda1cf1f2188' ,
      // url: 'https://api.jisuapi.com/dream/search?appkey=d52273a85bbe39fd&keyword=' + options.dataname + '&pagenum=1&pagesize=10', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        console.log(res.data['msg'])
        that.setData({
          textdata: res.data['msg'],
          list:res.data['result']['list']
        });
      }


    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '转发',
      path: '/pages/index/index',
      success: function (res) { }
    }
  }
})