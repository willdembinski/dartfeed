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
  var possImgs = $("img.js-image-replace");
  var nextPossImgs = $('img');
  if(possImgs.length){
    return possImgs[0].attribs.src ||  possImgs[0].attribs['datasrc'];//hopefully returns an image
  }
  if(nextPossImgs.length){
    return nextPossImgs[3].attribs.src;
  }
  return "http://zetasky.com/wp-content/uploads/2015/01/Blue-radial-gradient-background.png" //fallback
}

function _feedParseAsync(){
  var bbcUrl="http://feeds.bbci.co.uk/news/technology/rss.xml";
  var feedParser = new rssModule(bbcUrl);
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

function bbcParser(){  //pass init a callback and vroom vroom to the boom boom.
  var self = this;
  this.results = [];
  this.init = function(cb){
    return _feedParseAsync().then(function(responses){
      var result = [];
      responses.forEach(function(response){
        console.log(response.feed.link)
        _imageRetrieveAsync(response.link,{})
        .then(function(body){
            mongoObj = {};
            mongoObj.source = "BBC";
            mongoObj.title = response.title;
            mongoObj.linkURL = response.link;
            mongoObj.date = new Date(response.published).toISOString();
            mongoObj.summary = response.content;
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
var qq = new bbcParser();

qq.init(function(results){
  console.log(results);
})



module.exports = bbcParser;