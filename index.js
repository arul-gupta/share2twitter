function tweet(){
    chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (response){
        urlToShorten = response.url;
        title = response.title.substring(0, 100);
alert(urlToShorten + "###" +title);

POSTurl = "https://www.googleapis.com/urlshortener/v1/url";

   request=new XMLHttpRequest();
   request.open("POST",POSTurl);
   request.setRequestHeader("Content-Type",
"application/json");

request.onreadystatechange = function() {
if(request.readyState==4)
{
alert(request.responseText);
console.log(request.responseText);
}
}
request.send('{"longUrl" :"' + urlToShorten + '"}');
}); 
});
}

chrome.browserAction.onClicked.addListener(tweet);
