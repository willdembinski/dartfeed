var feedCat = require("./feedCat.js")
var bbcRSS = require("../crawl_modules/rssCrawls/bbcRss.js")
var cnetRSS = require("../crawl_modules/rssCrawls/cnetRSS.js")
var hrNewsRSS = require("../crawl_modules/rssCrawls/hrNewsRss.js")
var mashRSS = require("../crawl_modules/rssCrawls/mashableRss.js")
var nprRSS = require("../crawl_modules/rssCrawls/nprRss.js")
var tCrunchRSS = require("../crawl_modules/rssCrawls/techCrunchRss.js")




var bbcRSS = new bbcRSS();
var cnetRSS = new cnetRSS();
var hrNewsRSS = new hrNewsRSS();
var mashRSS = new mashRSS();
var nprRSS = new nprRSS();
var tCrunchRSS = new tCrunchRSS();

var i = 1;

var objCollection = [];

var x = 1000;




bbcRSS.init(function(obj){
  // console.log(obj);

  // objCollection.push(obj);


  feedCat.analyzeContentCallbackPromise(obj.summary)
  .then(function(category) {
    if(obj === undefined) {
      console.log("Some bad place");
    }
    if(obj.category === undefined) {
      // console.log("Yes")
      obj.category = ["GeneralTech"];
    }
    obj.category = [category];
    console.log(obj.category);
  })
  .catch(function(error) {
    console.log("Error", error);
  }

  );


})


// cnetRSS.init(function(obj){
//   console.log(obj);
//   //var categories = monkeyAPI(obj.content)
//   //stuff to obj
// })
// hrNewsRSS.init(function(obj){
//   console.log(obj);
//   //var categories = monkeyAPI(obj.content)
//   //stuff to obj
// })
// mashRSS.init(function(obj){
//   console.log(obj);
//   //var categories = monkeyAPI(obj.content)
//   //stuff to obj
// })
// nprRSS.init(function(obj){
//   console.log(obj);
//   //var categories = monkeyAPI(obj.content)
//   //stuff to obj
// })
// tCrunchRSS.init(function(obj){
//   console.log(obj);
//   //var categories = monkeyAPI(obj.content)
//   //stuff to obj
// })


var text = ["It's no secret that the U.S. healthcare system is in desperate need of change"];

// feedCat.analyzeContentCallback(text, function(err, category) {
//     if(err) {
//         console.log("The err is", err);
//     } else {
//         console.log("Category is: ", category);
//     }
// })


// feedCat.analyzeContentCallbackPromise(text)
// .then(function(category) {
//   console.log(category);
// })
// .catch(function(error) {
//   console.log("Error", error);
// })



