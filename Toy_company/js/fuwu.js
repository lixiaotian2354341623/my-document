	var fuw={"tit":{"tit_i":'./img/white.png',"tit_h":'服务范围',"tit_p":'Scope of ser'},
    "tii":[{"tii_i":'./img/yz.png',"tit_y":'益智玩具类'},
            {"tii_i":'./img/pt.png',"tit_y":'拼图玩具类'},
            {"tii_i":'./img/jm.png',"tit_y":'积木游戏类'},
            {"tii_i":'./img/kt.png',"tit_y":'卡通玩偶类'}]
        }
    var fu=document.querySelector('.fuwu')
    var cc='<div class="fuwu_tit"><img src="'+fuw.tit.tit_i+'"/><p>'+fuw.tit.tit_h+'</p><p>'+fuw.tit.tit_p+'</p></div>'
    var fg='<div class="fuwu_img clearfix"><ul>'
    fuw.tii.forEach(function(v,i){
    	var cd='<ul><li><img src="'+v.tii_i+'"/><p>'+v.tit_y+'</p></li></ul>'
    	fg+=cd
    })
    fg+='</ul></div>'
    fu.innerHTML+=cc+fg;