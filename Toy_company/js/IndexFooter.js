/*
*调用方法：IndexFooter(myjson,clname)；
* myjson=json数据。
* 作者：赵璇
* 日期：2018-01-02
* 版本：v1.0
 */
var _myjson=[{"logo1":"Toys&nbsp;&&nbsp;Musical&nbsp;Instruments&nbsp;","logo2":"Design"},
              {"path1":"company.html","nav1":"关于我们","path2":"company.html","nav2":"产品展示","path3":"company.html","nav3":"新闻资讯","path4":"company.html","nav4":"联系我们"},
              {"copy":"&copy;2018网站样板-玩具乐器版权所有","path1":"#","nav1":"手机版&nbsp;&nbsp;|","nav2":"本站使用xxxxx搭建&nbsp;&nbsp;|","path3":"#","nav3":"管理登录"}
            ]
function IndexFooter(myjson,clname){
    var str="";
    
    myjson.forEach(function(v,i){
        if(i==0){
        str+='<div class="footermod"><div class="footername"><span>'+v.logo1+'</span><span style="color:white;">'+v.logo2+'</span></div>'}
        else if(i==1){
        str+='<div><a href="'+v.path1+'">'+v.nav1+'</a><a href="'+v.path2+'">'+v.nav2+'</a><a href="'+
        v.path3+'">'+v.nav3+'</a><a href="'+v.path4+'">'+v.nav4+'</a></div>'
    }
    else{
        str+='<div><p>'+v.copy+'</p><p><a href="'+v.path1+'"><span>'+v.nav1+'</span></a><span>'+v.nav2
        +'</span><a href="'+v.path3+'"><span style="border-right:none;">'+v.nav3
        +'</span></a></p></div></div>';
    }
    });
    clname.innerHTML=str;
}
var _inner=document.querySelector(".footer");
var myfoot=new IndexFooter(_myjson,_inner);