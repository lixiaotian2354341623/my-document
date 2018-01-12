var content=[{"tit":"新品资讯"},
    {"tit":"New Arrivals"},
    {"tit":"更多联系"}
];
var content3=[{"tit":"新闻资讯"},
    {"tit":"New information"},
    {"tit":"更多资讯"}
];
var sum="";
function con1(a,b) {

    var str="<div class='left'><img src='./img/profileconter.png'><p>"+a[0].tit+"</p>";
    var str3="<p>"+a[1].tit+"</p></div>";
    var str2="<div class='right'> <a href='#'><button onclick=javascript:window.location.href='#'>"+a[2].tit+"</button></a></div>";
    sum=str+str3+str2;
    var con=document.querySelector(b);
    // console.log(con);
    con.innerHTML=sum;



}

// var con=document.querySelector();
// var con2=new con1(content,".content2");