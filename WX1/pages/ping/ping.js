import { pinglun,pinglun1 } from "../../dataServer/dataServer.js"
let app = getApp();
Page({
  data: {
    data:{},
    interests:[],
    data1:{
      "count": 3, 
      "start": 0 
    },
    id:{}
  },
  onLoad({ id }) {
    let that = this;
    pinglun(id , this);
    pinglun1(id , this);
    this.setData({
        userInfo: app.userInfo, 
        islogin: app.islogin
    });
    wx.setStorage({
        key: `wang`,
        data: {id}
    });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.data1.start = this.data.data1.start + this.data.data1.count;
    pinglun1(this.data.id,this,this.data.data1);
  },
  xiangkan(){
    
    wx.switchTab({
      url: `/pages/test/test`
    })
  }
})