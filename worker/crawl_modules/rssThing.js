var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');
var feed = require("feed-read");


feed("http://mashable.com/category/rss/", function(err, articles) {
// feed("http://feeds.feedburner.com/TechCrunchTV/Ask-A-VC", function(err, articles) {
// feed("http://www.cnet.com/rss/news/", function(err, articles) {
// feed("http://feeds.bbci.co.uk/news/technology/rss.xml#", function(err, articles) {
// feed("http://www.npr.org/rss/rss.php?id=1019", function(err, articles) {
  if (err) throw err;
  console.log(articles)
});