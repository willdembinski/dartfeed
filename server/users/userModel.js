var mongoose = require('mongoose');

var UserProfilesSchema = new mongoose.Schema({
 categories: [ {categoryID: Number} ],
 username: String,
 history: [ {articleID: Number} ],
 following: [ {userID: Number} ],
 followers: [ {userID: Number} ]
});

module.exports = mongoose.model('UserProfiles', UserProfilesSchema);