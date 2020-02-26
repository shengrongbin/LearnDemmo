function onReachBottom(){
    var dh=document.documentElement.scrollHeight;
    window.onscroll=function(){
        var sh=document.documentElement.scrollTop;
        var ah=document.documentElement.clientHeight;
        if(sh+ah==dh){
            alert("到达底部");
        }
    }
}