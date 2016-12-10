//model/comments.js
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating of new instance of mongoose schema. schema takes an object that shows the shape of db entries
var CommentsSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model('Comment', CommentsSchema);
