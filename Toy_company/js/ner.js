

    get('json/description.json',parse);
    function parse(msg) {
        console.log(msg);
        var sum="";
        var str="<div class='left'><img src='http://11313172.s61i.faiusr.com/4/AD0IlMCyBRAEGAAgjNStvwUotJKFsQIwMjge.png' alt=''><p>"+msg[0].tit+"</p>";
        var str3="<p>"+msg[1].tit+"</p></div>";
        var str2="<div class='right'> <a href='#'><button onclick=javascript:window.location.href='#'>"+msg[2].tit+"</button></a></div>";

        sum=str+str3+str2;
        var con=document.querySelector(".content2");
        con.innerHTML=sum;

    }



    get("json/description2.json",pars);
    function pars(msg2) {
        console.log(msg2);


        var sum="";
        for (var i=0;i<msg2.length;i++){
            var str="<dl><dt><a href='#'><img src="+msg2[i].path+"></a></dt><dd><h4>"+msg2[i].tit+"</h4><P>"+msg2[i].tit2+"</P></dd></dl>";
            sum+=str;
            var con=document.querySelector(".l-con2");
            con.innerHTML=sum;
            msg2[i].path.onmouseover=function () {
                this.style.left="10px";

            }
        }



    }