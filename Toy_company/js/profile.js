/*
*调用方法：profile(js,clname)；
* js=json数据
* clname=div的classname。
* 作者：赵璇
* 日期：2018-01-02
* 版本：v1.0
 */
var _arr=[{"bgpath":"./img/profile-02.jpg"},
{"path":"./img/profileconter.png","stit":"公司简介&nbsp;","stit2":"Company&nbsp;profile","conter":"成立于1999年,是集设计、开发、生产、销售为一体的中大型企业，是国内为数不多，真正具有自主品牌的电动智能高科技玩具企业。是香港国际集团下属的全资子公司。并于2004年在内地开设东莞市分厂，成功的实现了国际营销、特区研发、内地生产的完美结合。是2011年深圳第26届世界夏季大学生运动会吉祥物的玩具特许经营商，提供的吉祥物在胡锦涛主席主持的开幕式后馈赠各国政要及嘉宾。一直走在行业的前列。并于2011年8月4日在&lt;&lt;新闻联播&gt;&gt;头条中报道了哈一代玩具股份自主研发，成功转型的先进事迹，为行业的发展方向树立了榜样。2011年被当地政府列为产业转型升级的重点培育企业。"},
{"tit1":"在线咨询——联系电话：400-00000","tit2":"Online&nbsp;advice&nbsp;-&nbsp;contact&nbsp;phone:&nbsp;400-000000","button":"更多联系"}]      
function profile(js,clname){
    var str="";
    js.forEach(function(v,i){
        if(i==0){
        clname.style='background:url('+v.bgpath+') no-repeat center;'
        }
        
        else if(i==1){   
            str+='<div class="conter_1 "><div><img src="'+v.path
            +'"><h3 style="color:rgb(43,43,43)"><span style="font-size: 1.8rem;">'+v.stit
         +'</span><span style="font-size: 1rem;">'+v.stit2+'</span></h3><p style="font-size: 0.75rem;color:rgb(148,148,148)">'
         +v.conter+'</p></div></div>'
        }
        else{
            str+='<div class="conter_2 "><div class="con"><div class="Contact"><p style="font-size:1.625rem">'
            +v.tit1+'</p><p style="font-size:0.75rem">'+v.tit2+'</p></div><div class="button"><a href="About_Us.html" style="font-size: 1rem; color:white;">'+v.button+'</a></div></div></div></div>'
        }
                
    });
    clname.innerHTML=str;
  }
var _inner=document.querySelector(".profile");
var _in=new profile(_arr,_inner);