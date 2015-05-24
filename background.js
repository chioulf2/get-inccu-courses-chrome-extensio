chrome.browserAction.onClicked.addListener(function(tab) {

	//alert(tab.url);

	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "content_script.js" });
	});
});

