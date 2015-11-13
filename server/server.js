var express = require('express'); 
var mongoose = require('mongoose'); 
var router = require('./router.js'); 
var body = require('body-parser'); 

mongoose.connect('mongodb://localhost/dartfeed'); 

var app = express();
var expressRouter = express.Router(); 

// parse application/x-www-form-urlencoded
app.use(body.urlencoded({ extended: false }))

// parse application/json
app.use(body.json())

app.use('/', expressRouter); 

router(expressRouter); 

app.listen(8000); 

module.exports = app; 



