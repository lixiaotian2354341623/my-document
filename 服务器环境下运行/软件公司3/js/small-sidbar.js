


  var al=document.querySelectorAll(".goods-t a");
  var lis=document.querySelector(".last .goods-b");
  console.log(lis)
  var wid=document.querySelector(".last .items").clientWidth;


   lis.style.marginLeft=0;

  for (var i=0;i<al.length;i++){
              al[i].index=i;

  }
   var lis2;
   for (var m=0;m<al.length;m++){

       al[m].onmouseover=function () {
             lis2=this.index;
             //获取当前对象的index属性
                lis.style.marginLeft=-(lis2*wid)+"px";
              lis.style.transition="all 1s";
              al[lis2].className="active";
             //  al[lis2].style.background="#8d9095";
             // al[lis2].style.color="#ef4f19";



           }
       al[m].onmouseout=function () {

           lis2=this.index;
           al[lis2].className="";

       }



   }



   /*自动轮播*/






