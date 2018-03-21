


function slideshow() {
    var slideshow=document.querySelector(".sidbar"),
        imgs=slideshow.querySelectorAll(" .sidbar img"), //得到图片们
        pages=slideshow.querySelectorAll(".con li"), //得到页码们
        current=0; //current为当前活跃的图片编号
    console.log(slideshow);
    console.log(imgs);
    console.log(pages);

    function slideOff() {
        imgs[current].className=""; //图片淡出
        pages[current].className="";

    }
    //   function sidbarOut(){
//       imgs[current].className="";//图片淡出
//       pages[current].className="";
//
//   }
    function slideOn() {
        imgs[current].className="active"; //图片淡入
        pages[current].className="active";

    }
    //        function sidbarOn(){
//            imgs[current].className="active";//图片淡入
//            pages[current].className="active";
//
//        }

    function changeSlide() { //切换图片的函数
        slideOff();
        current++; //自增1
        if(current>=8) current=0;
        slideOn();
    }
    //        function changeimg (){
//      sidbarOut();
//      current++;
//      if (current>=2)
//          current=0;
//
//        sidbarOn();
//        }

    //每2s调用changeSlide函数进行图片轮播
    var slideon=setInterval(changeSlide,2000);

    slideshow.onmouseover=function () {
        clearInterval(slideon); //当鼠标移入时清除轮播事件
    };
    slideshow.onmouseout=function () {
        slideon=setInterval(changeSlide,2000); //当鼠标移出时重新开始轮播事件
    };

    for(var i=0; i<pages.length; i++) { //定义鼠标移入和移出页码事件
        pages[i].onmouseover=function(){
            slideOff(); //图片淡出
            current=this.innerHTML-1; //得到鼠标停留的页码对应的current
            console.log(current);
            slideOn(); //图片淡出
        }
    }
    //        var set=setInterval(changeimg,2000);
//        sidbarshow.onmouseover=function () {
//              clearInterval(set);//移入清除
//        };
//        sidbarshow.onmouseout=function () {
//             set=setInterval(changeimg,2000);//移出继续
//        };
//
//        for (var i=0;i<pages.length;i++){
//     pages[i].onmouseover=function () {
//          sidbarOut();
//          current=this.innerHTML-1;
//          sidbarOn();
//    }
//    }
//    }sidbarshow();

}

slideshow();