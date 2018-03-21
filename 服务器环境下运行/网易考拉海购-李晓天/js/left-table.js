var  lis=$(".alonely2").nextAll();

console.log(lis);
var items=document.querySelectorAll(".item");
console.log(items);
for (var i=0;i<lis.length;i++){
    lis[i].index=i;


          console.log(i);
}

for (var m=0;m<lis.length;m++){
  lis[m].onmouseover=function (){

          for (var n=0;n<lis.length;n++){
             lis[n].style.display="none";
                                         }

      var lis2=this.index;
      console.log(lis2);
      items[lis2].style.display="block";

                               }

                              }
for (var m=0;m<lis.length;m++){
    lis[m].onmouseout=function (){

        for (var n=0;n<lis.length;n++){
            lis[n].style.display="none";
        }

        var lis2=this.index;
        console.log(lis2);
        items[lis2].style.display="none";

    }

}


