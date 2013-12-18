
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// config

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu'); 

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.methodOverride());

});
// routes ======================================================================
require('./app/routes.js')(app);


app.listen(8080);
console.log("App listening on port 8080");