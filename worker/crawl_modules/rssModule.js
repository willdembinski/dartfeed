var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');
var feed = require("feed-read");






function feedParse(url,options){
  this.url = url;
  this.options = options;

  this.parse = function(callback){ //callback(err,articlesCollection)
    //"http://feeds.feedburner.com/TechCrunchTV/Ask-A-VC"
    // feed("http://mashable.com/category/rss/", function(err, articles) {
    feed(this.url, callback);
    // feed(this.url, callback) {
    // // feed("http://www.cnet.com/rss/news/", function(err, articles) {
    // // feed("http://feeds.bbci.co.uk/news/technology/rss.xml#", function(err, articles) {
    // // feed("http://www.npr.org/rss/rss.php?id=1019", function(err, articles) {
    //   if (err) throw err;
    //   console.log(articles)
    // });

//https://news.ycombinator.com/rss


  }


}


module.exports = feedParse;