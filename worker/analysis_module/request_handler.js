

// var najax = require('najax');
// var curl = require('curlrequest');






// najax({
//     url : "https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1",
//     type : "POST",
//     headers: {
//         "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
//     },
//     dataType: "json",
//     contentType: "application/json; charset=utf-8",
//     data : JSON.stringify({
//       text_list: ["some text to test", "some more text"]
//     }),
//     success : function(result) {
//       console.log(result);
//     },
//     error : function(e) {

//     }
// });

var http = require('http');
var request = require('request');


//callback will be called with this format : callback(err, result)

var analyzeContentCallback = function(textArr, callback) {
//Lets configure and request
request.post({
    url: 'https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1', //URL to hit
    headers: {
       "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
   },
   json: {
    text_list: textArr
}

}, function(error, response, body){
    if(error) {
        callback(error, null);

    } else {
        //console.log(response.statusCode);
        var responseCategory;
        if((body === undefined) || (body.result === undefined)) {
          responseCategory = "General";
        } else {
          responseCategory = (body.result[0][0].label).toString;
        }
        
        callback(null, responseCategory);

    }
});

}
var text = ["It's no secret that the U.S. healthcare system is in desperate need of change"];

// analyzeContentCallback(text, function(err, category) {
//     if(err) {
//         console.log("The err is", err);
//     } else {
//         console.log("Category is: ", category);
//     }
// })


module.exports = analyzeContentCallback;
