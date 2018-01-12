var a_con = [{"tit":"设计团队"},
    {"tit":"Design"}];
function a_conn(a,b) {
    var sum="";
    var str="<div class='left'><img src='./img/profileconter.png'><p>"+a[0].tit+"</p>";
    var str3="<p>"+a[1].tit+"</p></div>";


    sum=str+str3;
    var con=document.querySelector(".content");
    con.innerHTML=sum;
}
var con=new a_conn(a_con,con);