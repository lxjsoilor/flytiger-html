function toast(content, duration) {
  $('body').toast({
    content: content,
    duration: duration || 1500,
  });
};
function validate(value, type) {
  if (type === 'require') {
    return !!value;
  }
  if (type === 'phone') {
    return /^1\d{10}$/.test(value);
  }
  if (type === 'email') {
    return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
  }
  if (type === 'pwd') {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,14}$/.test(value);
  }
  if (type === 'number') {
    return /^[0-9]*$/.test(value);
  }
  if (type === 'discount') {
    return /^(?:([1-9](?:\.[\d]{0,1})?)|(?:0\.[1-9]{1,1})|10)$/.test(value);
  }
};
function getCookie (key) {
  var str = document.cookie;
  var arr = str.split("; ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(key) != -1) {
      var temp = arr[i].split("=");
      if (temp[0] == key) {
        return decodeURIComponent(temp[1]);
      }
    }
  }
}
// 设置cookie
function setCookie (key, value, expires, path, domain, isSecure) {
  //获取多个cookie值用&连接的，或只是获取name的value值
  var str = encodeURIComponent(key) + "=" + encodeURIComponent(value);
  //获取一个cookie值
  //var str=key+"="+value;
  if (typeof expires == "number") {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    str += ";expires=" + date;
  }
  if (path) {
    str += ";path=" + path;
  }
  if (domain) {
    str += ";domain=" + domain;
  }
  if (isSecure) {
    str += ";secure";
  }
  document.cookie = str;
}
