function showQRcode(dom){
	
//layer.msg('Scan The WeChat QR Code!');
//setTimeout(function(){
//	layer.open({
//type: 1,
//title: false,
//closeBtn: 0,
//area: '516px',
//skin: 'layui-layer-nobg', //没有背景色
//shadeClose: true,
//content: '<img src="img/wechat.jpg" />'
//});
//},1500);




layer.open({
  type: 4,
  tips: [3, "#555555"],
  content: ['<img src="img/wechat.png" width="150px" height="150px" />', dom] //数组第二项即吸附元素选择器或者DOM
});    
layer.msg('Scan The WeChat QR Code!');
}
