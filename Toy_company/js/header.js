var head = [{"tit":"Toys"},
    {"tit":" &amp; Musical Instruments "},
    {"tit":"Design"},
    {"tit":"首页","path":"index.html"},
    {"tit":"关于公司","path":"company.html"},
    {"tit":"产品展示","path":"show.html"},
    {"tit":"新闻动态","path":"news.html"},
    {"tit":"联系我们","path":"About_Us.html"}];
function header(a,b) {
    var sum="<ul>";
    for (var i=0;i<a.length;i++){
        if(i<3){
        var str="<li><a href='#'>"+a[i].tit+"</a></li>" ;
        sum+=str;}
        else{
            switch(i){
                case 3:
                str="<li><a href='"+a[i].path+"'>"+a[i].tit+"</a></li>" ;
                sum+=str;
                break;
                case 4:
                str="<li><a href='"+a[i].path+"'>"+a[i].tit+"</a></li>" ;
                sum+=str;
                break;
                case 5:
                str="<li><a href='"+a[i].path+"'>"+a[i].tit+"</a></li>" ;
                sum+=str;
                break;
                case 6:
                str="<li><a href='"+a[i].path+"'>"+a[i].tit+"</a></li>" ;
                sum+=str;
                break;
                case 7:
                str="<li><a href='"+a[i].path+"'>"+a[i].tit+"</a></li>" ;
                sum+=str;
                break;
                default:
                break;
                }
            }
    }
    heaad.innerHTML=sum;
    sum+="</ul>";

}
var heaad=document.querySelector(".header");
var inner=new header(head,heaad);