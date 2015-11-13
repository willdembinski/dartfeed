var rssModule = require('./rssModule.js');

var request = require('request');
var cheerio = require('cheerio');



function _imageRetrieveAsync(articleURL,options){

  return new Promise(function(resolve,reject){
    request(articleURL,function(error,response,body){
      if(error){
        reject(error);
      }else{
        resolve(body);
      }
    });
  });
}
function _parseBody(body){
  $ = cheerio.load(body)
  var possImgs = $('span.imageContainer img');
  var nextPossImgs = $('span.imageContainer img');
  var lastDitchEffort = $('img');
  if(possImgs.length){
    return possImgs[0].attribs.src ||  possImgs[0].attribs['data-original'];//hopefully returns an image
  }
  if(nextPossImgs.length){
    return nextPossImgs[0].attribs.src || nextPossImgs[0].attribs['data-original'];
  }
  if(lastDitchEffort.length){
    return lastDitchEffort[0].attribs.src || lastDitchEffort[0].attribs['data-original'];
  }
  return "http://zetasky.com/wp-content/uploads/2015/01/Blue-radial-gradient-background.png"

}

function _extractContent(input){
  var $ = cheerio.load("<div class='mother'></div>");
  $('div').append(input);
  return ($('.mother').children()[0].prev.data) //<-- this might be REALLY unreliable. But works for first test.

}


function _feedParseAsync(){
  var cnetRssUrl="http://www.cnet.com/rss/news/";
  var feedParser = new rssModule(cnetRssUrl);
  return new Promise(function(resolve,reject){
    feedParser.parse(function(error,responses){
      if(error){
        reject(error);
      }else{
        resolve(responses)
      }
    });
  });
}

function cnetParser(){
  var self = this;
  this.results = [];
  this.init = function(cb){
    return _feedParseAsync().then(function(responses){
      var result = [];
      responses.forEach(function(response){
        _imageRetrieveAsync(response.link,{})
        .then(function(body){
            mongoObj = {};
            mongoObj.source = "CNET";
            mongoObj.title = response.title;
            mongoObj.linkURL = response.link;
            mongoObj.date = new Date(response.published).toISOString();
            mongoObj.summary = _extractContent(response.content);
            mongoObj.categories=[];
            mongoObj.imgURL = _parseBody(body).trim();
            self.results.push(mongoObj);
        }).then(function(){
          cb(self.results);
        }).catch(function(err){
          console.log(err);
        })
      });
    })
  }
}
module.exports = cnetParser;

var qq = new cnetParser();
qq.init(function(res){
  console.log(res)
});














