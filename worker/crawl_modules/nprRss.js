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
  var possImgs = $('.img');
  var nextPossImgs = $('img');
  if(possImgs.length){
    return possImgs[0].attribs.src ||  possImgs[0].attribs['alt'];//hopefully returns an image
  }
  if(nextPossImgs.length){
    return nextPossImgs[0].attribs.src || nextPossImgs[0].attribs['title'];
  }
  return "http://zetasky.com/wp-content/uploads/2015/01/Blue-radial-gradient-background.png"

}

function _extractContent(input){
  var $ = cheerio.load(input);
  return ($('p').text()); //<-- this might be REALLY unreliable. But works for first test.

}


function _feedParseAsync(){
  var nprUrl="http://www.npr.org/rss/rss.php?id=1019";
  var feedParser = new rssModule(nprUrl);
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

function nprParser(){
  var self = this;
  this.results = [];
  this.init = function(cb){
    return _feedParseAsync().then(function(responses){
      var result = [];
      responses.forEach(function(response){
        _imageRetrieveAsync(response.link,{})
        .then(function(body){
            mongoObj = {};
            mongoObj.source = "NPR";
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
module.exports = nprParser;

var qq = new nprParser();
qq.init(function(res){
  console.log(res)
});














