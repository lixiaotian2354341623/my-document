//倒计时

    function func1() {
        var click=document.querySelector(".click");
        console.log(click);
        var mtop=document.querySelector(".mnav");
        console.log(mtop);
        window.onscroll = function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var top2 = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(top);
            if (top > 240&&top2>240) {
                click.style.position = "fixed";
                click.style.display = "block";
                mtop.style.position = "fixed";
                mtop.style.top=50+"px";
                mtop.style.zIndex=999;

                // mtop.style.marginTop=-50+"px";


            }
            else {
                click.style.position = "absolute";
                click.style.display = "none";
                mtop.style.position = "absolute";
                mtop.style.top=317+"px";
                mtop.style.zIndex=0;
                //   mtop.style.marginTop=-50+"px";
                //
                // mtop.style.left=0+"px";
                // mtop.style.top = 0;

            }

        }

        click.onclick=function () {
            document.documentElement.scrollTop= document.body.scrollTop=0;
        }

    }
    function func2() {
        var timeer=null;
        timeer=setInterval(countTime,1000);
        var big=document.querySelector(" #biggtext");
        var bigg=document.querySelectorAll(".small-time");
        console.log(bigg);
        console.log(big);


        function countTime() {
            var nowtime=new Date();//获取当前时间
            // console.log(nowtime.year)
            console.log(nowtime);
            var  endtime=new Date(2018,2,22,0,20,0);

            console.log(endtime);
            var t=Math.floor((endtime-nowtime)/1000)//计算差值s
            // console.log(t);
            var day=Math.floor(Math.floor(t/86400));//天  每天86400s
            console.log(day);
            var  hour=Math.floor(t%86400/3600);//时
            console.log(hour);

            var min=Math.floor((t%3600)/60)//分
            console.log(min);
            var s=t%60;//s
            console.log(s);

            if (t==0){
                clearInterval(timeer);
                big.innerHTML="抢购结束!";
                for (var f=0;f<bigg.length;f++){

                    bigg[f].innerHTML="抢购结束!";
                }


            }
            else{
                big.innerHTML = "" +addZero(hour) + ":" + addZero(min) + ":" + addZero(s);
                for (var n=0;n<bigg.length;n++){

                    bigg[n].innerHTML = "距结束:" +addZero(hour) + ":" + addZero(min) + ":" + addZero(s);
                }

            }
        }
        countTime();
        function addZero(iNum) {
            return iNum<10? "0"+iNum:iNum;//判断小于10  加0

        }


    }

function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(func1);
addLoadEvent(func2);
