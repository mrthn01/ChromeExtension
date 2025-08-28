chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "Wikit",
        "title": "Wikit",
        "contexts": ["selection"]
    });
});

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "Wikit" && clickData.selectionText){
        chrome.system.display.getInfo(function(displays){
            var screenSize = displays[0];
            var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
            var createData = {
                "url": wikiUrl,
                "type": "popup",
                "top": 5,
                "left": 5,
                "width": Math.floor(screenSize.bounds.width) / 2,
                "height": Math.floor(screenSize.bounds.height) / 2  
            };
            chrome.windows.create(createData, function(){}); 
        });                 
    }
});