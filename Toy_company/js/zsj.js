function lunbo(){
    var sum = '',slr = '',i = 0,the = this;
    the.t = the.t;//轮播时间

    //获取到所在的元素

    var lb = document.querySelector(".lb");

    //读取json

    jn.forEach(function(v,i){
        var str =  '<img class="i" src="'+ v.path +'" alt="" style="'+ v.style +'">';
        sum += str;
    });

    //生成页面
    
    lb.innerHTML += '<div class="lunbozsj" style="width: 100%;position: relative;overflow: hidden;">'+ sum +'<div class="xo"><img src="'+ jn[0].path +'" style="width: 100%;opacity:0;z-index:-1"></div></div>';
    var warp = document.querySelector(".lunbozsj"),
    Ox = warp.querySelector(".xo"),
    imgs = warp.querySelectorAll(".i");

    for(var l = 0;l < imgs.length;l++){
        slr += '<li style="float: left;border-radius: 50%;width: 8px;height: 8px;background: rgba(255,255,255,.6);margin-right: 10px;"></li>';
    }
    Ox.innerHTML += '<ul style="position: absolute;bottom: 12px;left: 50%;z-index: 2;width: '+ imgs.length*18 +'px;margin-left: '+ -imgs.length*9 +'px">'+ slr +'</ul>';

    //获取焦点
    var lis = Ox.querySelectorAll("li");

    //设置定时器

    var myset = window.setInterval(Tim,the.t);
    lis[imgs.length-1].style.backgroundColor = "rgba(0,0,0,.6)";
    function Tim(){
        for(var j = 0;j < imgs.length;j++){
            imgs[j].style.opacity = "0";
            lis[j].style.backgroundColor = "rgba(255,255,255,.6)";
        }
        imgs[i].style["z-index"] = "1";
        imgs[i].style.opacity = "1";
        lis[i].style.backgroundColor = "rgba(0,0,0,.6)";
        i ++;
        if(i > imgs.length-1){
            i = 0;
        }
        for(var k = 0;k < imgs.length;k++){
            imgs[k].style["z-index"] = "0";
        }
    }

    //鼠标移入清除定时器，移出重新加入定时器

    for(var n = 0;n < imgs.length;n++){
        lis[n].index = n;
        lis[n].onclick = function(){
            for(var m = 0;m < imgs.length;m++){
                imgs[m].style.opacity = "0";
                lis[m].style.backgroundColor = "rgba(255,255,255,.6)";
            }
            imgs[this.index].style["z-index"] = "1";
            imgs[this.index].style.opacity = "1";
            lis[this.index].style.backgroundColor = "rgba(0,0,0,.6)";
            for(var k = 0;k < imgs.length;k++){
                imgs[k].style["z-index"] = "0";
            }
        };
    }
    warp.onmouseover = function(){myset = window.clearInterval(myset);};
    warp.onmouseout = function(){myset = window.clearInterval(myset);myset = window.setInterval(Tim,the.t);};
}

var jn = [{"path":"./img/AD0IlMCyBRACGAAg8MytvwUohbTXoAEw-w44vQU.jpg","style":"width: 100%;position: absolute;transition: all 1s;"},
{"path":"./img/AD0IlMCyBRAEGAAg2N6NzgUo2puanAUwgA84oQY.png","style":"width: 100%;position: absolute;transition: all 1s;"}];


var jn1 = [{"path":"img/pic1.jpg","style":"width: 100%;position: absolute;transition: all 1s;"},
{"path":"img/pic2.jpg","style":"width: 100%;position: absolute;transition: all 1s;"},
{"path":"img/pic3.jpg","style":"width: 100%;position: absolute;transition: all 1s;"},
{"path":"img/pic4.jpg","style":"width: 100%;position: absolute;transition: all 1s;"}];


var ll = new lunbo();
ll.t = 5000;