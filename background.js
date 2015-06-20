chrome.browserAction.onClicked.addListener(function(tab) {

	if(tab.url == "http://moltke.cc.nccu.edu.tw/selfDevelop_SSO/lessionStudyDataList.selfDevelop"){
			var sessionid = ''; 
			chrome.cookies.get({url:'http://140.119.19.39', name:'sessionid'}, function(cookie) { 
				sessionid = cookie.value;
			});
		chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
		    chrome.tabs.executeScript(null, { code: "var sessionid='"+sessionid+"';"}, function() {
			    chrome.tabs.executeScript(null, { file: "content_script.js" });
			});
		});

	}
	else{
		alert("不好意思 你在錯誤的頁面喔~");
	}

	

});


