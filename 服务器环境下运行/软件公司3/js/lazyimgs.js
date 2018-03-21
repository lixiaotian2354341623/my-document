





window.onload=function () {

    window.onscroll = function () {

        var top = document.documentElement.scrollTop || document.body.scrollTop;
        var seeHeight = document.documentElement.clientHeight;
        (function () {
            var img = document.querySelectorAll(".con-wrap img");

            console.log(top);
            for (var j = 0; j < img.length; j++) {
                img[j].index = j;
                if (img[j].offsetTop < seeHeight + top) {
                    img[j].style.width = 130 + "px";
                    img[j].style.transition = "all 500ms";
                }

            }

        })();
        (function () {
            var h1 = document.querySelector(".conn-wrap").children;

            var hh = document.querySelector(".conn-wrap");
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var seeHeight = document.documentElement.clientHeight;
            console.log(h1)
            for (var g = 0; g < h1.length; g++) {
                h1[g].index = g;

                if (g === 0 && h1[g].offsetTop < seeHeight + top) {
                    // alert(h1[g].offsetTop)
                    h1[g].style.left = 0 + "%";
                    h1[g].style.transition = "all 1s";
                    h1[g].childNodes[3].style.marginLeft = 0;
                    h1[g].childNodes[3].style.transition = "all 1.5s"
                    h1[g].childNodes[5].style.marginLeft = 0;
                    h1[g].childNodes[5].style.transition = "all 2s"
                    // if(g==1){

                }
                else if (g === 1 && h1[g].offsetTop < seeHeight + top) {
                    h1[g].style.right = 10 + "%";
                    if (h1[g].style.right = 10 + "%") {
                        h1[g].style.transition = "all 1s";
                        h1[g].style.transform = "rotate(720deg)";
                    }
                }


            }
        })();
        (function () {

            var headerr = document.querySelector(".wrap");
            if (top > 70) {
                headerr.style.position = "fixed";
                headerr.style.top = 0 + "px";
            }
            else {
                headerr.style.position = "absolute";
            }

        })();
        (function () {


            var link=document.querySelector("#onelink");
            console.log(link);
            if (top > 100) {
                link.style.opacity = 0.6;
            }
            else {
                link.style.opacity = 0;
            }
            link.onclick = function () {
                //全兼容各浏览器
                $('html,body').animate({'scrollTop': 0});
            }

        })();
        (function () {

            var tit1 = document.querySelector(".tit-1")
            if (tit1.offsetTop < seeHeight + top) {
                tit1.style.opacity = 1;
                tit1.style.transition = "opacity 0.7s"
            }
            var list = document.querySelectorAll(".bbox li");
            var box = document.querySelector(".bbox");
            var myul = document.querySelector(".bbox ul")
            for (var m = 0; m < list.length; m++) {
                if (box.offsetTop < seeHeight + top) {
                    myul.style.paddingTop = 0;
                    myul.style.transition = "all 1s";
                }
            }

        })();
        (function () {

            var img = document.querySelector(".imgw ");
            // alert(img)
            var rightb = document.querySelector(".right-mes");
            if (img.offsetTop < seeHeight + top) {
                // img.style.transform ='rotatey(1080deg)';
                // img.style.transition='all 3s';
                img.style.transformOrigin = 'center center';
            }
        })();



    }
}

