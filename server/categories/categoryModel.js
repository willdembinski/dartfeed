var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  categoryID: Number,
  name: String,
  description: String
});

module.exports = mongoose.model('Category', CategorySchema);