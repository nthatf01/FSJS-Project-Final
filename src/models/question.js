'use strict';

var mongoose = require('mongoose');

 var questionSchema = new mongoose.Schema({
   number: String,
   question: String,
   answer: [String],
   subject: String
 });

var model = mongoose.model('Question', questionSchema);

module.exports = model;
