var rssModule = require('./rssModule.js');

var request = require('request');
var cheerio = require('cheerio');

function imageRetrieveAsync = function(articleURL,options){

  return new Promise(function(reject,resolve){
    request(articleURL,function(error,response,body){
      if(error){
        reject(error);
      }else{
        resolve({response:response,body:body});
      }
    });
  });
}




function extractContent(input){
  var $ = cheerio.load("<div class='mother'></div>");
  $('div').append(input);
  return ($('.mother').children()[0].prev.data) //<-- this might be REALLY unreliable. But works for first test.

}

function cnetImageRetriever(articleURL,options){ //.imageContainer
  response = '';
  var options = options || {
     //not properly name...but meh.
    //someother stuff maybe
  };
  request(articleURL, function (error, response, body) {

    if (error) {
      console.log("Error in CNET IMAGE RETRIEVAL: ",error); 
    }else{
      $ = cheerio.load(body);
      try{
        response = $('span.imageContainer img')[0].attribs.src; //hopefully returns an image
      }catch(ea){
        console.log("Initial image selection failed, pursuing fallback A")
        try{
          response = $('span .galleryLauncher img')[0].attribs.src;
        }catch(eb){
          try{
            console.log("Secondary image selection failed, pursuing fallback B")
            response = $('img')[0].attribs.src;
          }catch(ec){
            console.log("Attempts to find an image for : " + articleURL + "Failed.")
          }
        }
      }
    }
  })
  if(!response){
    response = "http://static2.fjcdn.com/comments/Anons+the+only+ones+that+really+matter+_26d464ab76b44744f4d84a9cb7f7cb9e.png"
  }
  return response;
}

var cnetRssUrl="http://www.cnet.com/rss/news/";
var feedParser = new rssModule(cnetRssUrl);


feedParser.parse(function(error,responses){
  if(error){
    console.log("Error in CNET FEED PARSER: ",error)
  }else{
    var result = [];
    responses.forEach(function(response){
      mongoObj = {};
      mongoObj.title = response.title;
      mongoObj.linkURL = response.link;
      mongoObj.date = new Date(response.published).toISOString();
      mongoObj.summary = extractContent(response.content);
      mongoObj.imgURL = cnetImageRetriever(response.link);
      mongoObj.categories=[];
      result.push(mongoObj)
    });
    console.log("Results ",result)
  }

});
