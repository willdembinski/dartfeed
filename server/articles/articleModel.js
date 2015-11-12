var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title : String,
  linkURL: String,
  summary: String,
  source: String,
  imgURL: String,
  date: Date, 
  categories: [ {categoryID: Number} ],
  visitsCount : Number,
  metadata : String
});

module.exports = mongoose.model('Article', ArticleSchema);
