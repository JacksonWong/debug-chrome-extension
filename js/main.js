"use strict";
document.onreadystatechange = function(){
	if(document.readyState == 'interactive'){
		chrome.runtime.sendMessage('queryRunningState', function(response) {
		    if(response === 'on'){
				var n=document.createElement("script");
		        //将本content_script中的debug函数转换成字符串，再注入到web页面中
		        n.text = 'window.debug='+ window.debug.toString();
		        document.head.insertBefore(n, document.head.firstChild);

		        console.log('debug script injected!');
		        // debugger;
		    }
		});
	}
};

/*
content_scripts所读取的localStorage时web页面的
要获取来自extension的状态信息，必须使用runtime.sendMessage来向extension查询信息

从manifest.json的content_scripts声明下加载的injectScript.js会在当前的
content_script的window对象上添加一个debug函数。
该window对象独立于web页面上的window，或插件background page上的window，
它们存在于各自的沙箱中。
*/
// chrome.runtime.sendMessage('queryRunningState', function(response) {
//     if(response === 'on'){
//         var n=document.createElement("script");
//         //将本content_script中的debug函数转换成字符串，再注入到web页面中
//         n.text = 'window.debug='+ window.debug.toString();
//         document.head.insertBefore(n, document.head.firstChild);

//         console.log('debug script injected!');
//         // debugger;
//     }
// });