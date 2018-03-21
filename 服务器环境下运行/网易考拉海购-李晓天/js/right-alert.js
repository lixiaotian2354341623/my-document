








var al=document.querySelector(".alert")
          al.innerHTML+="<ul><li><a href='#'><span class='text'>每日签到<br>赢考拉豆</span>"+
    "   <span class='arrow'>"
    +" <span class='arr'></span>"
    +" <span class='arr1'></span>"
    +"</span>"+

    "</span><span><i class='iconfont'>&#xe617;</i>"+
    "</span><p>签到</p></a></li><li><a href='#'><span><i class='iconfont'>&#xe625;</i></span><p>购物车</p>" +
    "</a></li><li><a href='#' class='app'><span><i class='iconfont'>&#xe608;</i></span><p>APP</p><span class='qrcode'></span></a> </li><li><a href='' class='scrtop'><i class='iconfont'>&#xe610;</i><p id='a01'>TOP</p>" +
    "</a></li></ul>";
var al2=document.querySelector(".right-alert");
  al2.innerHTML+="<a href='#' class='topimg'><img src='images/ip50ucjr81_99_49.jpg' alt=''></a><ul class='one'><li class='text2'><a href=''>今日限时购</a></li><li class='text2'><a href=''>今日上新</a></li><li class='text2'><a href=''>热门品牌</a></li></ul><ul class='two'><li><a href=''>母婴专区</a></li><li><a href=''>美容彩妆</a></li><li><a href=''>服饰鞋包</a></li><li><a href=''>家居个护</a></li><li><a href=''>营养保健</a></li><li><a href=''>数码家电</a></li><li></li></ul><a href='' class='lastimg'><img src='images/xiadan.jpg' alt=''></a>"
function alert(al) {

        window.onscroll = function () {
            var al = document.querySelector(".alert")
            var al2 = document.querySelector(".right-alert");
            var al3=document.querySelector(".click");
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var top2 = document.documentElement.scrollTop || document.body.scrollTop;


            console.log(top);
            if (top > 500&&top2>500) {
                (al).style.position = "fixed";
                ( al).style.top = 70 + "px";
                (al2).style.position = "fixed";
                ( al2).style.top = 70+ "px";
                ( al2).style.left = 13 + "px";


            }
            else {
                (al).style.position = "absolute";
                (al).style.top = 600 + "px";
                (al2).style.position = "absolute";
                (al2).style.top = 600 + "px";
                ( al2).style.left = 5 + "px";


        }
        }
}
var scroo=new alert(top);