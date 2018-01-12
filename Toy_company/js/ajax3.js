function get(path,fun){
//应用对象XMLHttpRequest 打开地址  发送请求 监听状态 （准备情况和状态两个属性）响应数据（reponseText）
    var http=new XMLHttpRequest();
    http.open('get',path,true);
    http.send();
    http.onreadystatechange=function(){
        console.log(this.readyState,'-----------',this.status);
        if(this.readyState==4 && this.status==200){
//响应的文本
            var _data=this.responseText;
            //把后台传递过来的数据字串 解析成json对象
            var _json=JSON.parse(_data);
            console.log("suc=====",_json);
            fun(_json);
        }
    }

}
	