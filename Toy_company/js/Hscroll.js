//滚动超过o像素事件 html 引用此js 然后调用 ttOnscroll(o) o为滚动的距离

function ttOnscroll(o){
    document.body.innerHTML += '<a href="#top"><div class="ToTop"></div></a>';
    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var s = document.querySelector(".ToTop");
        if( t >= o ) { 
            s.style.display = "block";
        } else { 
            s.style.display = "none";
        } 
    }

}

var tt = new ttOnscroll(300); //调用传如滚动距离