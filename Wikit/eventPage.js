// This function runs once, when the extension is first installed or updated.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "wikit",
        "title": "Wikit",
        "contexts": ["selection"]
    });
});

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

// This listener will be re-registered each time the service worker starts.
chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "wikit" && clickData.selectionText){    
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": Math.round(screen.availWidth/2), // It's good practice to round pixel values
            "height": Math.round(screen.availHeight/2)
        };              
        chrome.windows.create(createData, function(){});        
    }
});