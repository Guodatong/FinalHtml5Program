var nav=new Vue({
			el:'.header',
			data:{
				homepage: "Home Page",
				television: "Television",
				refrigerator: "Refrigerator",
				washingmachine: "Washing Machine",
				aircleaner: "Air Cleaner",
				vaccumcleaner: "Vaccum Cleaner",
				language: "Language Select",
				contactus: "Contact Us",
				airconditioner:"Air Conditioner",
				account:"My Account",
				cart:"Cart"
			}
			
		});
		var lan =localStorage.language;
		changeLanguage(lan);
function changeLanguage(type){
	if(type=='en-En'){
		console.log("changetoEN");
		localStorage.language="en-En";
		nav.homepage="Home Page";
		nav.television="Televison";
		nav.refrigerator="Refrigerator";
		nav.washingmachine="Washing Machine";
		nav.aircleaner="Air Cleaner";
		nav.vaccumcleaner="Vaccum Cleaner";
		nav.language="Language Select";
		nav.contactus="Contact US";
		nav.airconditioner="Air Conditioner";
		nav.account=" Account";
		nav.cart=" Cart";
		
	}else if(type=='zh-CN'){
		localStorage.language="zh-CN";
		console.log("changetoCh");
		nav.homepage="首页";
		nav.television="电视机";
		nav.refrigerator="冰箱";
		nav.washingmachine="洗衣机";
		nav.aircleaner="空气净化器";
		nav.vaccumcleaner="吸尘器";
		nav.language="语言选择";
		nav.contactus="联系我们";
		nav.airconditioner="空调";
		nav.account=" 账户";
		nav.cart=" 购物车";
		
	}
}

