import { homeload } from "../../dataServer/dataServer.js";
Page({
  data:{
    types:{
      "movie_showing":{
        "flag": true,
        "name": "新片速递",
        "film": []
      },
      "movie_free_stream":{
        "flag": true,
        "name": "免费观影",
        "film": []
      },
      "movie_latest":{
        "flag": true,
        "name": "影院热播",
        "film": []
      }
    }
  },
  onLoad(){
    homeload("movie_showing", this);
    homeload("movie_free_stream", this);
    homeload("movie_latest", this);
  }
  
})
