var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title : String,
  linkURL: String,
  summary: String,
  source: String,
  imgURL: String,
  date: Date, 
  categories: [ {name: String} ],
  visitsCount : Number,
  metadata : String
});

ArticleSchema.methods.insertArticle = function (data) {
  var article = new Article(data);

  // need to look up the categoryID from the category in order to 
  article.create(data);
}

module.exports = mongoose.model('Article', ArticleSchema);
