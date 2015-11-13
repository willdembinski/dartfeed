var mongoose = require('mongoose');

var ArticleCategorySchema = new mongoose.Schema({
  title : String,
  linkURL: String,
  summary: String,
  source: String,
  imgURL: String,
  date: Date, 
  visitsCount : Number,
  metadata : String
});

//



//
var CategorySchema = new mongoose.Schema({
  name: String,

});

module.exports = mongoose.model('Category', CategorySchema);
