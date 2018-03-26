import { goload } from "../../dataServer/dataServer.js";
Page({
  data: {
   title:"",
   film:[],
   types:"",
   data:{"count": 12, "start": 0}
  },
  onLoad({ title,types }) {
    this.setData({
      title,
      types,
    });
    goload(types, this, { "count": 12, "start": 0 });
  },
  onReachBottom(){
    this.setData({
      "data.start": this.data.data.count + this.data.data.start
    });
    goload(this.data.types, this,this.data.data);
  }
})
