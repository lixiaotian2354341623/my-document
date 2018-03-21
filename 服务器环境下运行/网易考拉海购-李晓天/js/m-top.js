

window.onload=function (a) {
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

            // mtop.style.marginTop=-50+"px";


        }
        else {
            click.style.position = "absolute";
            click.style.display = "none";
            mtop.style.position = "absolute";
            mtop.style.top=317+"px";
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
