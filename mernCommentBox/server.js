//server.js
'use strict'

//import dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
//create instances
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds131878.mlab.com:31878/mydb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req,res){
  res.json({message: 'API Initialized'});
});

app.use('/api', router);

//starting server and listen for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
