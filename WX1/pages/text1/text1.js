import { yingping} from "../../dataServer/dataServer.js"

Page({

  data: {
      recommend_feeds:[],
      date:''
  },
  onLoad() {
      yingping(this)
  },
  onReachBottom: function () {
      yingping(this)
  },
  onShareAppMessage: function () {
    //   yingpian(this)
  }
})