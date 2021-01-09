export  let request = (url, data, method = "GET",tokens) => {
  return new Promise((resolve, reject) => {
    let token='bearer '+wx.getStorageSync('token');
    wx.showLoading({
      title: "加载中",
    });
    wx.request({
      header:{
        Authorization:token
      },
      url: "https://jieruimi.top/api/" + url, //开发者服务器接口地址",
      data: data, //请求的参数",
      method: method,
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        wx.hideLoading();
        if(res.statusCode===401){
          wx.redirectTo({
            url:'/pages/login/main'
          })
        }
        if(res.statusCode!==200){
          wx.showToast({
            title: res.data.error,
            icon:'none',
            duration:3000,
          });
        }else{
          resolve(res.data); 
        }
      },
      fail: (res) => {
        wx.hideLoading();
        reject(res);
        wx.showToast({
          title: "网络错误",
          icon:'none',
          duration:3000,
        });
      },
    });
  });
};
