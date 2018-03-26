const app = getApp();

Page({
  data:{},
  onLoad(){
    this.setData({
      userInfo: app.userInfo,
      islogin: app.islogin
    });
    
    wx.getStorage({
        key: `wang`,
        success: function (res) {
            console.log(res.data.id)
        }
    });

  },
  loginuser:function(){
    wx.getUserInfo({
      success:({ userInfo })=>{
        this.setData({
          userInfo,
          islogin:true
        });
        app.userInfo = userInfo;
        app.islogin = true;
      },
      fail(){
        wx.openSetting({});
      }
    });

  }
})
