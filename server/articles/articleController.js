var Article = require('./articleModel');
var Category = require('../categories/categoryModel');
var Promise = require('bluebird');
Promise.promisifyAll(require("mongoose"));


module.exports = {

  getArticles : function (req, res, next) {

  //   numPopularArticles = 5;
  //   // get query parameters for popular and for categories

  //   var popular = req.query.popular;
  //   var categories = req.query.category;

  //   // if popular = true
  //     // get most popular articles
  //     // add these articles to the set, which we will return

  //   if ( popular && categories) {
  //     res.send('Must specify either popular OR categories, not both.');
  //   } else if ( popular ) {
  //     Article.find({}).sort({ visitsCount: -1 })
  //       .then(function (topArticles) {
  //         topArticles.splice(numPopularArticles,topArticles.length);
  //         res.send(topArticles);
  //         return topArticles;
  //       }, function (err) {
  //         console.error(err);
  //       });
  //   } else if ( categories) {
  //     resBody = [];
  //     categories.forEach(function (category) {
        
  //     });     


  //   }

  //   if ( categories )
  //     Category.find({})
  //     // get all articles with the provided categories
  //     // add these articles to the set, which we will return

  //   // send articles
  },

  insertArticles : function (req, res, next) {
    var articleData = req.body;
    var artPromises = [];

    artPromises.push(req.body.forEach(function (articleData) {
      articleData.date = new Date(articleData.date);
      articleData.visitsCount = 0;
      articleData.metadata = 0; //for potential features later
      var catPromises = [];
      var catIndices = [];

      articleData.categories.forEach(function (category) {

        catPromises.push(Category.findOne({ name: category}, '_id')
          .then(function (cat) {
            if ( cat ) {
              catIndices.push({categoryID : cat._id});
              // TODO: add article to the category
              return;
            } else {
              return Category.create({name: category})
                .then(function(newCat) {
                  catIndices.push({categoryID : newCat._id});
                  // TODO: add article to the category

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

