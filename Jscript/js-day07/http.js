var oBaseUrl="https://music.aityp.com/"
function http({url,type="get",callback}){
    $.ajax({
        url:oBaseUrl+url,
        type:"get",
        dataType:"json",
        success:res=>{
            callback(res)
        }
    })
}