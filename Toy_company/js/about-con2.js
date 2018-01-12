var a_con = [{"path":"img/2l.jpg","tit":"王小姐","tit2":"他知识丰富、业务过硬以精心精致的设计展现年轻人巨大..."},
    {"path":"img/3l.jpg","tit":"吴先生","tit2":"他知识丰富、业务过硬以精心精致的设计展现年轻人巨大..."},
    {"path":"img/4l.jpg","tit":"黄小姐”","tit2":"他知识丰富、业务过硬以精心精致的设计展现年轻人巨大..."}];
function con(a,b) {
    console.log(a);
    var sum = "";
    var str2 = "<div>优秀的设计师是把建设单位和设计者的意图、理念、风格及慧在图纸上的表现，而景观施工就是把这一切在实地真实的展现出<br>来，这是制造过程中非常重要的一个环节。</div>"
    for (var i = 0; i < a.length; i++) {
        var str = "<dl><dt><a href='#'><img src=" + a[i].path + "></a></dt><dd><h4>" + a[i].tit + "</h4><P>" + a[i].tit2 + "</P></dd></dl>";
        sum += str;

    }

    con2.innerHTML=sum;
    console.log(con2.innerHTML);
    txtx.innerHTML=str2;

}
var con2 = document.querySelector(".l-con");
var txtx=document.querySelector(".txt");

var cona=new con(a_con,con2);
