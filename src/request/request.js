export  let request = (url, data, method = "GET") => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: "加载中",
    });
    wx.request({
      header:{
        Authorization:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTM1NTIyMjYsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsibnVsbCIsIlJPTEVfVVNFUiJdLCJqdGkiOiIxMzRhYmQ0Zi02NTlhLTQ4ZjctODE2Ny04MDQ4MzBhYzM5NzkiLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.V_BGKP47npzT06en2Lg3NCnzf0k-e8QZKuDKLMruQAk"
      },
      url: "http://120.26.187.170/" + url, //开发者服务器接口地址",
      data: data, //请求的参数",
      method: method,
      dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: (res) => {
        console.log(res)
        wx.hideLoading();
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
