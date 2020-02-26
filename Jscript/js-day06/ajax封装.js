function http(url,type="get",callback){
    $.ajax({
        url:url,
        type,
        dataType:"json",
        success:res=>{
            callback(res)
        }
    })
}