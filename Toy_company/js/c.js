    var oo=[{oa:'img/er.png',ob:'img/white.png',oc:'品牌理念',od:'Company profile',oe:'经营方向：绕着大市场，在平稳中求发展，以市场营销为主导，充<br />分整合内外资源，在功能，形象管理等方面充分整合以建立有效的<br />对外传播机制。',of:'经营模式：自组渠道，在全国建立代理经销机制和有统一形象的连<br />锁专卖形式，通过深入的市场推广和营销，在最短的时间和最合理<br />的场所建立加盟店，公司通过不断的产品研发和生产，不断传播和<br />树立强势品牌。'}]
	 var dk="";
	 oo.forEach(function(v,i){
	 	var oj='<div class="company_to"><img src="'+v.oa+'"/></div><div class="company_onw"><img src="'+v.ob+'"/><span id="oo">'+v.oc+'</span><span>'+v.od+'</span><div class="company_zi"><p>'+v.oe+'</p><p>'+v.of+'</p></div></div>'
	 	dk+=oj
	 })		
	 var fdfl=document.querySelector('.company_tow')
	 fdfl.innerHTML=dk;