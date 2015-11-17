

var http = require('http');
// var request = require('request');

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));




var analyzeContentCallbackPromise = function(textArr) {
//Lets configure and request
// console.log("Processing string:", textArr);
var arr = [];
arr.push(textArr);
return new Promise(function(resolve, reject) {

    request.post({
    url: 'https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1', //URL to hit
    headers: {
     "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
 },
 json: {
    text_list: arr
}

}, function(error, response, body){
  // console.log("response from Monk:", response.statusMessage);
    if(error) {
        reject(error);

    } else {

        var responseCategory;
        if((response.statusCode !== 200) || (body === undefined) || 
            (body.result === undefined)) {
           responseCategory = "GeneralTech";
   } else { 
    responseCategory = body.result[0][0].label;
}
    resolve(responseCategory);
}
});

});

}



/* AJAX query for reference to switch back if Node */
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


/* Without promises: Use below implementation */
//callback will be called with this format : callback(err, result)

// var analyzeContentCallback = function(obj, callback) {

//     var textArr = obj.summary;
//     // console.log("Processing string:", textArr);
// //Lets configure and request
// request.post({
//     url: 'https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1', //URL to hit
//     headers: {
//        "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
//    },
//    json: {
//     text_list: textArr
// }

// }, function(error, response, body){
//     if(error) {
//         callback(error, null);

//     } else {
//         //console.log(response.statusCode);
//         // console.log("response from Monk:", response.statusMessage);
//         var responseCategory;
//         if((body === undefined) || (body.result === undefined)) {
//           responseCategory = "GeneralTech";
//       } else {
//           responseCategory = (body.result[0][0].label).toString;
//       }
//       // console.log("Debug", responseCategory)
//       obj.category.push(responseCategory);

//       callback(null, obj);

//   }
// });

// }

//Improvement needed in the below function to Promisify the HTTP method itself
// var analyzeContentCallbackPromise = function(textArr) {
// //Lets configure and request
// return new Promise(function(resolve, reject) {

//     request.post({
//     url: 'https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1', //URL to hit
//     headers: {
//        "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
//    },
//    json: {
//     text_list: textArr
// }

// })
// .then(function(response, body) {
//         var responseCategory = body.result[0][0].label;
//         resolve(responseCategory);
//     })
// .catch(function(error) {
//         reject(error);
//     });

// });

// }




// var analyzeContentCallbackPromise = function(textArr) {
// //Lets configure and request
// request.post({
//     url: 'https://api.monkeylearn.com/v2/classifiers/cl_bU9URqjk/classify/?debug=1&sandbox=1', //URL to hit
//     headers: {
//        "Authorization": "token 709c1e5cbdc76dd42282401bbf013d0474a043f6",
//    },
//    json: {
//     text_list: textArr
// }

// }.then(function(response, body) {
//         //console.log(response.statusCode);
//         var responseCategory = body.result[0][0].label;
//         callback(null, responseCategory);

// }).catch(function(error) { 
//         console.log(err);
//     });




// function(error, response, body){
//     if(error) {
//         callback(error, null);

//     } else {
//         //console.log(response.statusCode);
//         var responseCategory = body.result[0][0].label;
//         callback(null, responseCategory);

//     }
// });

// }


// module.exports.analyzeContentCallback = analyzeContentCallback;

module.exports.analyzeContentCallbackPromise = analyzeContentCallbackPromise;