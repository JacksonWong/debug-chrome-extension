(function(){
var toggle;

debugUtilInit();

function debugUtilInit(){
	var opt = store.get('options');

	if(opt === undefined){
    	store.set('options',{'debug': false});
    	toggle = false;
    } else {
    	toggle = opt.debug;
    }

    if(toggle){
    	chrome.browserAction.setIcon({path:"debug.png"});
    }
}

chrome.browserAction.onClicked.addListener(function(tab){
	toggle = !toggle;
	if(toggle){
		//不指定tabId时，即修改会应用到所有tab
		chrome.browserAction.setIcon({path:"debug.png"/*, tabId:tab.id*/});
		store.set('options', {'debug': true});
	} else {
		chrome.browserAction.setIcon({path:"debug_off.png"/*, tabId:tab.id*/});
		store.set('options', {'debug': false});
	}
});

// chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab){
// 	//激活tab时触发
// 	console.log(toggle, 'onActivated');
// 	setIconState();
// });
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	//刷新页面时或url被设置后触发
	console.log(toggle, 'onUpdated');
	setIconState();
});

function setIconState(){
	if(toggle){
    	chrome.browserAction.setIcon({path:"debug.png"});
    } else {
    	chrome.browserAction.setIcon({path:"debug_off.png"});
    }
}

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs.id, {greeting: "world"}, function(response) {
//     console.log(response);
//   });
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request === "queryRunningState"){
		if(toggle){
			sendResponse('on');		
		} else {
			sendResponse('off');
		}
	}
});

}());