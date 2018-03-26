function goload(a, c, data = { "count": 20, "start": 0 }) {
    function success({ data: { subject_collection_items } }) {
        c.setData({
            "film": c.data.film.concat(subject_collection_items),
            "flag": false
        });
    }
    loadLog(a, success, data);
}
function homeload(a, c, data = { "count": 10, "start": 0 }) {
    let film = `types.${a}.film`;
    let flag = `types.${a}.flag`;
    function success({ data: { subject_collection_items } }) {
        c.setData({
            [film]: subject_collection_items,
            [flag]: false
        });
    }
    loadLog(a, success, data);
}
function loadLog(a, success, data) {
    let url = `https://m.douban.com/rexxar/api/v2/subject_collection/${a}/items`;
    wx.request({
        url,
        data,
        success
    })
}
function pinglun1(id, that, data1 = { count: 3, start: 0 }) {
    let url = `https://m.douban.com/rexxar/api/v2/movie/${id}/interests`;
    function success({ data: { interests } }) {
        that.setData({
            interests: that.data.interests.concat(interests),
        });
    }
    ping(id, success, url, data1);
}
function pinglun(id, that) {
    let url = `https://m.douban.com/rexxar/api/v2/movie/${id}`;
    function success({ data, data: { id } }) {
        that.setData({
            data,
            id
        });
    }
    ping(id, success, url);
}
function ping(id, success, url, data1) {
    wx.request({
        url,
        data: data1,
        success
    })
}

/**
 * 
 */
function yingping(that) {
    let url = `https://m.douban.com/rexxar/api/v2/recommend_feed`;
    let data = {next_date:that.data.date};
    function success({ data}) {
        console.log(data)
        that.setData({
            recommend_feeds: that.data.recommend_feeds.concat([data]),
            date:data.date
        });
    }
    ying(url,success,data)
}
function ying(url,success,data) {
    wx.request({
        url,
        data,
        success
    })
}

module.exports = {
    goload, homeload, pinglun, pinglun1, yingping
} 