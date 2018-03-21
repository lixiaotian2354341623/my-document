



        // var navp = document.querySelectorAll(".navp a");
        var topp=document.getElementById("topp");
        var bottom=document.getElementById("bottom");
        var navp = document.querySelectorAll(".navp a");
        console.log(navp);
        var goods3 = document.querySelectorAll(" .goodslists")
        console.log(goods3);
        console.log(topp);
        console.log(bottom);


        function build() {
            for (var i = 0; i < navp.length; i++) {
                navp[i].index = i;
                var cc="";
                // navp[i].index=cc;
                for (var j = 0; j < navp.length; j++) {
                    var jj=0;
                    navp[jj].style.borderBottom = "2px red inset";
                    navp[i].onclick = function () {
                        for (var k = 0; k < goods3.length; k++) {
                            navp[jj].style.borderBottom = "";
                            navp[k].style.borderBottom = "";
                            goods3[k].style.display = "none";

                        }
                        var index = this.index
                        navp[index].style.borderBottom = "2px red inset";
                        goods3[index].style.display = "block";

                        // console.log(navp[index].target)
                        // return false;

                    }
                }

                bottom.onclick=function () {

                    cc++;
                    if(cc>5){cc=5}
                    for (var k = 0; k < goods3.length; k++) {
                        navp[k].style.borderBottom = "";
                        goods3[k].style.display = "none";

                    }
                    navp[cc].style.borderBottom = "2px red inset";
                    goods3[cc].style.display = "block";
                }

                topp.onclick=function () {

                    cc--;
                    if (cc<0){cc=0}
                    for (var k = 0; k < goods3.length; k++) {
                        navp[k].style.borderBottom = "";
                        goods3[k].style.display = "none";

                    }
                    navp[cc].style.borderBottom = "2px red inset";
                    goods3[cc].style.display = "block";


                }
            }
        }
        build()



