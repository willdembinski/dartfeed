var Article = require('./articleModel');
var Category = require('../categories/categoryModel');
var Promise = require('bluebird');
Promise.promisifyAll(require("mongoose"));


module.exports = {

  getArticles : function (req, res, next) {

    numPopularArticles = 5;
    numArticlesPerPage = 20;
    // get query parameters for popular and for categories

    var popular = req.query.popular; 
    //var categories = req.query.category;
    console.log('THE USER OBJECT: ', req.user.categories);
    console.log(req.user.categories);
    console.log('STRINGIFIED: ', JSON.parse(JSON.stringify(req.user.categories[0])).name);
    console.log('NOT STRINGIFIED: ', req.user.categories[0].name);

    var categories = req.user.categories.map(function (cat) {
      return 'asdgadsfg',JSON.parse(JSON.stringify(cat)).name
    });

    // for ( cat in req.user.categories ) {
    //   console.log(cat);
    //   console.log(req.user.categories[cat]);
    // }
    // var categories = req.user.categories.map(function(cat) {
    //   // console.log('here the cat: ' + cat);
    //   return cat.name;
    // });
    
    // console.log(categories);

    // if popular = true
      // get most popular articles
      // add these articles to the set, which we will return

    if ( popular && categories) {
      res.send('Must specify either popular OR categories, not both.');
    } else if ( popular ) {
      Article.find({}).sort({ visitsCount: -1 })
        .then(function (topArticles) {
          topArticles.splice(numPopularArticles,topArticles.length);
          console.log('entered here');
          res.send(topArticles);
          return topArticles;
        }, function (err) {
          console.error(err);
        });
    } else if ( categories.length ) {
      var resBody = [];
      var catPromises = [];
      //console.log(categories);

      categories.forEach(function (category) {
        catPromises.push(Category.findOne({ name: category})
          .then(function (cat) {
            if ( cat ) {
              resBody.push(cat.articles);
            } else {
              resBody.push()
            }
          }, function (err) {
            console.error(err);
          }));
      });
      Promise.all(catPromises)
        .then(function () {
          res.send(JSON.stringify(resBody));
        });
          
    }

  },

  insertArticles : function (req, res, next) {
    var articleData = req.body;
    var artPromises = [];

    artPromises.push(req.body.forEach(function (articleData) {
      articleData.date = new Date(articleData.date);
      articleData.visitsCount = 0;
      articleData.metadata = 0; //for potential features later
      var catPromises = [];
      var catData = [];

      articleData.categories.forEach(function (category) {

        catPromises.push(Category.findOne({ name: category})
          .then(function (cat) {
            var temp = articleData.categories;
            delete articleData.categories;
            if ( cat ) {
              catData.push({categoryID : cat._id, name: cat.name});
              cat.articles.push(articleData);
              console.log(cat.articles); 
              articleData.categories = temp;
              return cat.save();
            } else {

              return Category.create({name: category, articles: [articleData]})
                .then(function(newCat) {
                  articleData.categories = temp;
                  catData.push({categoryID : newCat._id, name: newCat.name});
                });
            }
          },function (err) {
            console.error(err);
          })
        );
      });
      
      Promise.all(catPromises).then(function () {
        articleData.categories = catData;
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

