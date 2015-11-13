var Article = require('./articleModel');
var Category = require('../categories/categoryModel');
var Q = require('q');

// Trying to promisify with bluebird
var Promise = require('bluebird');
Promise.promisifyAll(require("mongoose"));
///////////

module.exports = {

  // getArticles : function (req, res, next) {
  //   // get query parameters for popular and for categories

  //   var popular = req.query.popular;
  //   var categories = req.query.category;

  //   // if popular = true
  //     // get most popular articles
  //     // add these articles to the set, which we will return

  //   if ( popular ) {
      

  //   } 

    // if ( categories ) 
      // get all articles with the provided categories
      // add these articles to the set, which we will return

    // send articles
  //},

  insertArticles : function (req, res, next) {
    console.log('I\'m in insertArticles!');
    //console.log(req.body);

    var articleData = req.body;
    var numArticles = req.body.length;
    //var articleData = req.body[i];

    // removed for loop

    articleData.date = new Date(articleData.date);
    // Category.findOne({ name : articleData.category }, function ( err, category ) {
    //   if ( err ) {
    //     console.error(err);
    //     res.status(404);
    //     res.send('Category match failure.');
    //   } else {
    //     articleData.category = category;
        // var article = new Article(articleData);
        // Article.create(articleData).
        //   then ( function () {
        //     console.log('Success');
        //   }).
        //   catch ( function(err) {
        //     console.error(err);
        //   });
    
    


//////////////////// Working promises

    // Category.findOne({ name: articleData.categories[0].name}, '_id')
    //   .then(function (category) {
    //     articleData.categories[0].categoryID;
    //     console.log(category);
    //     return Category.findOne({ name: articleData.categories[0].name }, '_id');
    //   })      
    //   .then(function (category) {
    //     console.log('I\'m here!');
    //     console.log(category);
    //   }, function (err) {
    //     console.error(err);
    //   });
    var catPromises = [];
    var catIndices = [];

    articleData.categories.forEach( function (category) {

      catPromises.push(Category.findOne({ name: category}, '_id')
        .then(function (catID) {
          if ( catID ) {
            catIndices.push(catID);
            return;
          } else {
            return Category.create({name: category});
          }
        }, function (err) {
          console.error(err);
        })
      );
    });
    
    Promise.all(catPromises).then(function () {
      console.log(catIndices);
      console.log('complete');
    });

          

//////////////////////// Added Category

    // Category.create({name: articleData.categories[0].name})
    //   .then(function (category) {

    //   }, function (err) {
    //     console.log(err);
    //   });

/////////////////////// Q Attempt


    // var findCategory = Q.nbind(Category.findOne, Category);
    // findCategory({ name : articleData.category }, '_id')
    //   .then(function (category) {
    //     console.log(category);
    //   });

////////////////////////  Added Article
    // Article.create(articleData)
    //   .then(function (article) {
    //     res.send();
    //   }, function (err) {
    //     console.log(err);
    //   });
      
///////////////////////

    //   }
    // });

  }
}

