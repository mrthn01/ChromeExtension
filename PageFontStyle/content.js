chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = request.clickedColor;               
        $('h1').css('font-style','italic');
        $('h1').css('color', addColor);
        $('p').css('color', addColor);
    }
});