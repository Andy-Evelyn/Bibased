const corspost = (option) => {
  const options = Object.assign({}, {
    method: 'post',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    }
  }, option);
  return $.ajax(options);
};
const corsget = (option) => {
  const options = Object.assign({}, {
    method: 'get',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    }
  }, option);
  return $.ajax(options);
};
const checkLogin = ()=>{
  return corspost({
    url: 'http://118.89.217.84/exchange-platform/index.php/Login/checkLogin',
  });
  return corsget({
    url: 'http://118.89.217.84/exchange-platform/index.php/Login/checkLogin',
  });
}
export default {
  corspost,
  corsget,
  checkLogin
}

