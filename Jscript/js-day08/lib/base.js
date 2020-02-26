function onReachBottom(){
    /* 获取滚动区域的高度 */
    var dh = document.documentElement.scrollHeight;
    var sh = Math.ceil(document.documentElement.scrollTop);
    var ah = document.documentElement.clientHeight;
    return sh+ah==dh?true:false;
}