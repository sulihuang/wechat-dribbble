//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js')
const api = require('../../utils/api.js')

Page({
  data: {
    list: [],
    loading: false,
    windowHeight: 0,
    windowWidth: 0
  },
  onLoad: function () {
    this.setData({
      loading: false
    })
    app.fetchApi(api.getShots(), (err, res) => {

      //更新数据
      this.setData({list: res, loading: true})
    })
    this.index = 1
  },

  onShow: function(e) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },

  pullDownRefresh: function(e) {
    // 下拉刷新，重新加载数据； 
    // TODO，不重新加载，只更新对应列表；
    this.onLoad()
  },

  pullUpLoad: function (e) {
    if (this.data.list.length === 0) return;
    this.setData({
      loading: false
    })
    app.fetchApi(api.getShots({page: ++this.index}), (err, res) => {
      //更新数据
      this.setData({list: this.data.list.concat(res), loading: true})
    })
  },
})
