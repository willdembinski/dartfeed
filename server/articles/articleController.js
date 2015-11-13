var Article = require('./articles/articleModel');
var Category = require('../categories/categoryModel');

module.exports {

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
  },

  postArticles : function (req, res, next) {
    // iterate through the array of articles
    // write each of the articles to the database
    for ( var i = 0; i < req.body.length; i ++ ) {
      var articleData = req.body[i];
      articleData.date = new Date(articleData.date);
      Category.findOne({ name : articleData.category }, function ( err, category ) {
        if ( error ) {
          console.error(err);
        } else {
          articleData.category = category;
          var article = new Article(articleData);
          article.save().
            then ( function (err) {
              if ( error ) {
                console.error(err);
              } else {
                res.send('Your articles have been successfully received.');
              }
            });
        }

      });

    }


  }
}

