var content2 = [{"path":"./img/11l.jpg","tit":"乐高积木是儿童喜爱的玩"},
    {"path":"./img/12l.jpg","tit":"钢铁侠玩偶是漫威影业出品电影钢铁侠"},
    {"path":"./img/13l.jpg","tit":"美国总统罗斯福总统对熊熊喜爱的泰迪熊"}
];
function con2(a,b){
    // console.log(a);
    var sum="";
    for (var i=0;i<a.length;i++){
        var str="<dl><dt><a href='#'><img src="+a[i].path+"></a></dt><dd>"+a[i].tit+"</dd></dl>";
        sum+=str;
        var con=document.querySelector(b);
        con.innerHTML=sum;
    }
}

// var cont=new con2(content2,".l-con");