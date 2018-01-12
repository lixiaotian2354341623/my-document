var content= [{"path":"img/10l.jpg","tit":"选购儿童玩具认准“3C”认证","tit2":"中国是世界第一的玩具生产大国，但以贴牌加工型为主的生产结构，使得我国玩具整体质量水平较低，部分企业在玩具性能，生产..."},
    {"path":"img/16l.jpg","tit":"家长盘点近四成玩具闪光 孩子久玩必伤眼","tit2":"因既能讲故事、又能唱歌，儿童早教机、儿童益智玩具等深受家长和儿童的喜爱。但近日一则女童因玩闪光早教机损伤角膜的消息..."},
    {"path":"img/17l.jpg","tit":"输美玩具禁令或“松绑”","tit2":"核心提示 日前，美国消费品安全委员会(CPSC)在《联邦纪事》上发布一项最新的拟实施规则的通告：基于风险评估和数据..."}
];
function conten(a,b) {

    var sum = "";
    for (var i = 0; i < a.length; i++) {
        var str = "<dl><dt><a href='l-news.html'><img src=" + a[i].path + "></a></dt><dd><h4>" + a[i].tit + "</h4><P>" + a[i].tit2 + "</P></dd></dl>";
        sum += str;
        var con = document.querySelector(b);
        con.innerHTML = sum;
    }
}
var cotent=new conten(content,".l-con2");