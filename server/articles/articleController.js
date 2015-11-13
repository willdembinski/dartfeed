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

    var articleData = req.body;

    var artPromises = [];

    artPromises.push(req.body.forEach(function (articleData) {
      articleData.date = new Date(articleData.date);
      var catPromises = [];
      var catIndices = [];

      articleData.categories.forEach(function (category) {

        catPromises.push(Category.findOne({ name: category}, '_id')
          .then(function (cat) {
            if ( cat ) {
              catIndices.push({categoryID : cat._id});
              return;
            } else {
              return Category.create({name: category})
                .then(function(newCat) {
                  catIndices.push({categoryID : newCat._id});
                });
            }
          },function (err) {
            console.error(err);
          })
        );
      });
      
      Promise.all(catPromises).then(function () {
        articleData.categories = catIndices;
        Article.create(articleData)
        .then( function () {
          console.log('Article written successfully!');
        }, function(err) {
          console.error(err);
        });
      });

    }));

    Promise.all(artPromises).then(function() {
      res.send();
    });

  }
}

