/////2222
		var ar = [{ b: 'img/green.png', c: 'on', d: '联系我们', e: 'one', h: 'Contact us' }]
	var suu = "";
	ar.forEach(function(v, i) {
		var dd = '<span><img src="' + v.b + '"/></span><span id="' + v.c + '">' + v.d + '</span><span id="' + v.e + '">' + v.h + '</span>'
		suu += dd
	})
	//333
		var jn=[{mp:'如有任何问题请联系我们，我们7*24小时竭诚为您服务'},{mp:'联系电话：020-000000 400-000000'},{mp:'联系邮箱：contact@fkadjkhsf.co'},{mp:'联系地址：XXX省XXX市XXX县XXX路XXX号'}]
	var sss="";
	jn.forEach(function(v,i){
		var ss='<p>'+v.mp+'</p><br />'
		sss+=ss;
	})
	var weo = document.querySelector(".map_cen")
	weo.innerHTML='<div class="map_left"><div class="map_o">'+suu+'</div><div class="map_t">'+sss+'</div></div><div class="map_right"><div style="width:500px;height:350px;border:#ccc solid 1px;" id="dituContent"></div></div>'
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	////33333
	var jnl=[{impq:'成立于1999年,是集设计、开发、生产、销售为一体的中大型企业，是国内为数不多，真正具有自主品牌的电动智能高科技玩具企业。是香港国际集团下属的全资子公司。并于2004年在内地开设东莞市分厂，成功的实现了国际营销、特区研发、内地生产的完美结合。是2011年深圳第26届世界夏季大学生运动会吉祥物的玩具特许经营商，提供的吉祥物在胡锦涛主席主持的开幕式后馈赠各国政要及嘉宾。一直走在行业的前列。并于2011年8月4日在<<新闻联播>>头条中报道了哈一代玩具股份自主研发，成功转型的先进事迹，为行业的发展方向树立了榜样。2011年被当地政府列为产业转型升级的重点培育企业。'}]
	var sul = "";
	jnl.forEach(function(v, i) {
		var dg ='<span>'+v.impq+'</span>'
		sul+=dg	
	})
	var dr=document.querySelector(".map_end")
	dr.innerHTML=sul
	///444