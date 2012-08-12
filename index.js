function tweet(){
    chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (response){
        url = response.url;
        title = response.title.substring(0, 100);
        $.ajax({
            url: "https://www.googleapis.com/urlshortener/v1/url",
            data: JSON.stringify({'longUrl': url}),
            type: 'POST',
            dataType:'jsonp',
            success: function(data){ alert(data);
            }});
        /*var URLToOpen = "http://twitter.com/share?url="+url+"&counturl="+url+"&text="+title;
        window.open(encodeURI(URLToOpen));*/
    });
});

    }
chrome.browserAction.onClicked.addListener(tweet);
tweet();