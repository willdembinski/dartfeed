var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title : String,
  linkURL: String,
  summary: String,
  source: String,
  imgURL: String,
  date: String, // may need to change
  categories: [ {categoryID: Number} ],
  visitsCount : Number,
  metadata : String
});

module.exports = mongoose.model('Article', ArticleSchema);