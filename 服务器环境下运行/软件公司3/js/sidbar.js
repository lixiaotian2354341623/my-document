
    function sidbar() {
        var date=document.querySelectorAll(".datetime li");
        console.log(date)
        var imgs=["images/sidbar1.jpg","images/sidbar2.jpg","images/sidbar3.jpg"];
        console.log(imgs);
        var current=0;
        for(var i=0;i<imgs.length;i++){
            var cur=imgs[i];
            date[i].style.backgroundImage="url("+cur+")";
            // date[i].style.opacity=1;
        }
        function sidbarOut() {
            date[current].className="active";
        }
        function sidbarIn() {
            date[current].className="";
        }
        var myset=window.setInterval(every,2000);
        function every() {
            sidbarIn();
            current++;
            if(current>=3){current=0};
            sidbarOut();


        }


    }
    sidbar();
