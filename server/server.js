var express = require('express'); 
var mongoose = require('mongoose'); 
var router = require('./router.js'); 

mongoose.connect('mongodb://localhost/dartfeed'); 

var app = express();
var expressRouter = express.Router(); 

app.use('/', expressRouter); 

router(expressRouter); 

app.listen(8000); 

module.exports = app; 



