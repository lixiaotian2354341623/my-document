 function l_sidbar(){
        var pages=document.querySelectorAll(".page li"),//页码
            mainn=document.querySelector(".s-a-b"),//主视窗
            btnl=document.querySelector(".lbtn"),//左
            btnr=document.querySelector(".rbtn"),//右
            see=document.querySelector(".seebox"),
            // wid=document.querySelector(".s-a-b").clientWidth;//获取盒子宽度
             goods=document.querySelector(".goods-b");
            current=0;
            var wid=1254.39;
            see.style.marginLeft=0;
            // console.log(pages);



     //遍历子元素
         function changes() {

               del();
             current++;
             // console.log(current)
             if (current>2)current=0
             see.style.marginLeft=-(current*wid)+"px";
             see.style.transitionDuration="600ms";
             see.style.transitionTimingFunction="cubic-bezier(0.445, 0.05, 0.55, 0.95)";
               inp();



         }


         function inp() {
              pages[current].className="active";
         }
         function del() {
             pages[current].className="";
         }
            //设置定时器
      var myset=window.setInterval(sidbarshow,2000);
      function sidbarshow() {
           changes();
      }
        mainn.onmouseover=function () {
             clearInterval(myset);//移入清除
        }
     mainn.onmouseout=function () {
         myset=window.setInterval(sidbarshow,2000); //移出添加
     }

     //解决点击过快有bug
     var clickBlg=true;

   for (var z=0;z<pages.length;z++){
                  // pages[z].index=z;
                console.log(z)
                 pages[z].onclick=function (){
                      del();
                      current=this.innerHTML-1;
                      // if (current<0){current=0}
                      changes();
                      inp();


                 }

   }

   btnr.onclick=function () {
       changes();
   }
     btnl.onclick=function () {
         del();
        current--;
        if(current<0){current=2};
         see.style.marginLeft=-(current*wid)+"px";
         inp();

     }

 }
l_sidbar();