var User = require('./userModel.js');

module.exports = {

  addUserTest : function(req, res, next) {
    User.create({ 
      categories: [ { categoryID: 1 } ],
      username: 'test',
      history: [ { articleID : 1000 } ],
      following: [ { userID : 2 } ],
      followers: [ { userID: 5 } ]
      });
    res.send();
  }
}