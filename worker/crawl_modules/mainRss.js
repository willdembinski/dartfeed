var bbcRSS = require("./rssCrawls/bbcRss.js")
var cnetRSS = require("./rssCrawls/cnetRSS.js")
var hrNewsRSS = require("./rssCrawls/hrNewsRss.js")
var mashRSS = require("./rssCrawls/mashableRss.js")
var nprRSS = require("./rssCrawls/nprRss.js")
var tCrunchRSS = require("./rssCrawls/techCrunchRss.js")




var bbcRSS = new bbcRSS();
var cnetRSS = new cnetRSS();
var hrNewsRSS = new hrNewsRSS();
var mashRSS = new mashRSS();
var nprRSS = new nprRSS();
var tCrunchRSS = new tCrunchRSS();



bbcRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})
cnetRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})
hrNewsRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})
mashRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})
nprRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})
tCrunchRSS.init(function(obj){
  console.log(obj);
  //var categories = monkeyAPI(obj.content)
  //stuff to obj
})