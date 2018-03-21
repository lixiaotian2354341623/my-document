var navs=[{"text1":"00:00","text2":"已开抢"},
    {"text1":"07:00","text2":"已开抢"},
    {"text1":"09:00","text2":"抢购中"},
    {"text1":"13:00","text2":"即将开始"},
    {"text1":"17:00","text2":"即将开始"},
    {"text1":"21:00","text2":"即将开始"}
]
function sales(a,b){
    var sum="";
    var str="";
     a.forEach(function (v,i) {

         str+="<a href='#' class='lis'><p>"+v.text1+"</p><span>"+v.text2+"</span></a>";

     })
    sum=str;
    var nav=document.querySelector(b);
     nav.innerHTML=sum;
     console.log(nav.innerHTML)
}

var sale=new sales(navs,".navp");