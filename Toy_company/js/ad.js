/*
*调用方法：_ad(adpath,adclname)；
* adpath=img路径
* adclname=要将该模块插在div=classname的后面。
* 作者：赵璇
* 日期：2018-01-08
* 版本：v1.0
 */
  function _ad(adpath,adclname){
  	var str='<img src="'+adpath+'">'
  	var _adbefor=document.querySelector(adclname)
  	//设置新节点
var newNode = document.createElement("div");
//设置新节点的id=ad
newNode.id='ad'; 
newNode.innerHTML = str; 
//在adclname 的第2个元素之前插入newNode
_adbefor.insertBefore(newNode,_adbefor.childNodes[2]); 
  } 
  