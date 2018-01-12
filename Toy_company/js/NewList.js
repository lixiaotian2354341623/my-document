/*
*调用方法：NewList(js,clname)；
* js=json数据
* clname=div的classname。
* 作者：赵璇
* 日期：2018-01-02
* 版本：v1.0
 */
var json=[{"data":"01","year":"2018&#47;01","path1":"#","tit":"乐22高被指暴力过多","path2":"#","content":"该团队的首席研究员克里斯朵夫·巴特内克(Christoph Bartneck)表示，“乐高公司的产品不像以前那样无害了。乐高玩具中的暴力因素似乎超出了丰富游戏的程度。”研究者得出结论：“乐高玩具中的暴力因素随着时间以指数级的速度增长。"},
    {"data":"28","year":"2017&#47;09","path1":"#","tit":"乐12高被指暴力过多","path2":"#","content":"该团队的首席研究员克里斯朵夫·巴特内克(Christoph Bartneck)表示，“乐高公司的产品不像以前那样无害了。乐高玩具中的暴力因素似乎超出了丰富游戏的程度。”研究者得出结论：“乐高玩具中的暴力因素随着时间以指数级的速度增长。"},
    {"data":"28","year":"2017&#47;04","path1":"#","tit":"乐0高被指暴力过多","path2":"#","content":"该团队的首席研究员克里斯朵夫·巴特内克(Christoph Bartneck)表示，“乐高公司的产品不像以前那样无害了。乐高玩具中的暴力因素似乎超出了丰富游戏的程度。”研究者得出结论：“乐高玩具中的暴力因素随着时间以指数级的速度增长。"},
    {"data":"18","year":"2017&#47;02","path1":"#","tit":"乐2高被指暴力过多","path2":"#","content":"该团队的首席研究员克里斯朵夫·巴特内克(Christoph Bartneck)表示，“乐高公司的产品不像以前那样无害了。乐高玩具中的暴力因素似乎超出了丰富游戏的程度。”研究者得出结论：“乐高玩具中的暴力因素随着时间以指数级的速度增长。"},
    {"data":"10","year":"2017&#47;02","path1":"#","tit":"乐21高被指暴力过多","path2":"#","content":"该团队的首席研究员克里斯朵夫·巴特内克(Christoph Bartneck)表示，“乐高公司的产品不像以前那样无害了。乐高玩具中的暴力因素似乎超出了丰富游戏的程度。”研究者得出结论：“乐高玩具中的暴力因素随着时间以指数级的速度增长。"}

        
    ]
    function NewList(js,clname){
    var sum='<div class="con"><ul>'
    var str=''
    js.forEach(function (v,i){
      
      var str='<li><div class="left"><h2>'+v.data+'</h2><p>'+v.year+'</p></div><div class="right"><a href="'+v.path1+'"><h3>'+v.tit+'</h3></a><a href="'+v.path2+'"><p>'+v.content+'</p></a></div></li>'
      sum=sum+str;
    })
    clname.innerHTML=sum+'</ul></div></div>'
    }
    var con1=document.querySelector(".newlist")
    var _newlist=new NewList(json,con1);