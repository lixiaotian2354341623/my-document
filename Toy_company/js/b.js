				var dy=[{dyj:'公司简介',dyc:'Company profile',
				djp:'成立于1999年,是集设计、开发、生产、销售为一体的中大型企业，是国内为数不多，真正具有自主品牌的电动智能高科技玩具企业。是香港国际集团下属的全资子公司。并于2004年在内地开设东莞市分厂，成功的实现了国际营销、特区研发、内地生产的完美结合。是2011年深圳第26届世界夏季大学生运动会吉祥物的玩具特许经营商，提供的吉祥物在胡锦涛主席主持的开幕式后馈赠各国政要及嘉宾。一直走在行业的前列。并于2011年8月4日在<<新闻联播>>头条中报道了哈一代玩具股份自主研发，成功转型的先进事迹，为行业的发展方向树立了榜样。2011年被当地政府列为产业转型升级的重点培育企业。',
				djh:'img/company.jpg'}]
				var ddj='';
				dy.forEach(function(v,i){
					var dji='<div class="company_one"><div class="company_left"><div class="company_o"><img src="./img/profileconter.png"><span id="on">'+v.dyj+'</span><span id="one">'+v.dyc+'</span></div><br /><div class="company_on"><p>'+v.djp+'</p></div></div><div class="company_right"><img src="'+v.djh+'"/></div></div>'
				    ddj+=dji
				})
				var dju=document.querySelector('.company')
				dju.innerHTML=ddj;
				
				