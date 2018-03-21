 var lnews=[{"tit":"每日上新","clock":"全世界好物，零点更新", "tit3":"进入新品频道>"},

     {"path":"images/goods1.jpg","text1":"清新少女风格家纺品牌", "text2":"满299减100"},
     {"path":"images/f83c59ae-db4e-421f-93e7-1047f5ecc651.jpg"},
     {"path":"images/c776ed3fa56a46d0a43cb219e49102dd1515650614634jca38qxf10372.jpg","text1":"ASICS亚瑟士GEL-CONTEND 4缓冲跑鞋跑步鞋运动鞋 男鞋 T715N-4901 9790", "text2":"￥269","text3":"￥450"},
     {"path":"images/c7826aba87f24c62a745a3feffa150db1515556187990jc8j0uua10785.jpg","text1":"LAMY 凌美 演绎优雅等通用Z27吸墨器 10克", "text2":"￥48","text3":"￥69"},
     {"path":"images/add8974bb8c14f78818872988c5bb3211515590193734jc939pv210052.jpg","text1":"KreativArt 艺术家入门级画笔盒 135件套", "text2":"￥309","text3":"￥399"},
     {"path":"images/2b61fbd29873437682b6ce8264481fd51512611362375javtr0un11884.jpg","text1":"猫头鹰牌三合一拉白咖啡（原味）540g", "text2":"￥58","text3":"￥99"},
     {"path":"images/6b3932529e52440a8829f2473da328471515758095655jcbv8ft911965.jpg","text1":"【美国直邮】】Salonpas 撒隆巴斯 腰背肩颈关节舒缓贴片 15片", "text2":"￥199","text3":"￥219"},
     {"path":"images/b180e14e06724fc9beb5f6cc1105de861513008962812jb2egzc018906.jpg","text1":"Philosophy 自然哲理 圣诞限量沐浴洗发泡泡浴三合一 481毫升/瓶", "text2":"￥179","text3":"￥250"},
     {"path":"images/2adfce46bbac4f83a45606e2dd52dfb61513652618942jbd1orl014672.jpg","text1":"Orijen渴望 加拿大进口 天然狗粮 通用型全犬粮 6千克", "text2":"￥600","text3":"￥600"},
     {"path":"images/11a4f1561a754250933a8ce118781e791514191926266jblyrzrw10917.jpg","text1":"OCEAN SPRAY 优鲜沛 巧克力夹心蔓越莓 142克/袋", "text2":"￥21.8","text3":"￥39"},
     {"path":"images/ebd4d06b01af4a1493e987cfe62f79cc1515486987924jc7dtnpx10164.jpg","text1":"MUJI 无印良品 扫除用品系列 扫帚", "text2":"￥34","text3":"￥39"},


 ]
 var str2="";
var sum="";
var  sum2="<div class='goods'><ul>";
var sum3="";
    function news(a,b) {
        var str = "<h2><span class='big'>" + lnews[0].tit + "</span>" + lnews[0].clock + "<a href='#'>" + lnews[0].tit3 + "</a></h2>";

        for (var i = 1; i < a.length; i++) {
            str2 += "<li><a href='#' class='imgclass'><img src=" + a[i].path + "></a><a href='#'><p>" + a[i].text1 + "</p></a><span class='price'>"+ a[i].text2 + "</span><span class='lowprice'>" + a[i].text3 + "</span></li>" +
                ""
        }
        sum=str;
        sum2+=str2+"<li><a href='#'><img src='images/j14sa6wz26_180_230.jpg' alt=''></a></li></ul></div>";
        sum3=sum+sum2;
          var lnew=document.querySelector(b);
           lnew.innerHTML=sum3.replace(/undefined/g,"");
           console.log(sum3);

 }

    var lnews2=news(lnews,".lnews");