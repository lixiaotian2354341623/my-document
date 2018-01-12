var content = [{"tit":"新闻资讯"},
    {"tit":"New information"},
    {"tit":"更多咨讯"}];
function conta(a,b){
    var sum="";
    var str="<div class='left'><img src='./img/profileconter.png'><p>"+a[0].tit+"</p>";
    var str3="<p>"+a[1].tit+"</p></div>";
    var str2="<div class='right'> <a href='#'><button onclick=javascript:window.location.href='#'>"+a[2].tit+"</button></a></div>";

    sum=str+str3+str2;
    var con=document.querySelector(".content2");
    con.innerHTML=sum;

}
var con=new conta(content,con);