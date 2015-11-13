var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');
var feed = require("feed-read");

function feedParse(url,options){
  this.url = url;
  this.options = options;

  this.parse = function(callback){ //callback(err,articlesCollection)
    feed(this.url, callback);
  }
}

module.exports = feedParse;