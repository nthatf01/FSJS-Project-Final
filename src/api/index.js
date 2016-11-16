'use strict';

var express = require('express');
var Question = require('../models/question');
//var questions = require('../../mock/questions.json');

var router = express.Router();

router.get('/questions', function(req, res){
  Question.find({}, function(err, questions) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({questions: questions});
  });
});

router.post('/questions', function(req, res){
  var question = req.body;
  Question.create(question, function(err, question){
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send(question);
  });
});

router.put('/questions/:id', function(req, res){
  var id = req.params.id;
  var question = req.body;
  if(question && question._id !== id){
    return res.status(500).json({err: "IDs don't match!"});
  }
  Question.findByIdAndUpdate(id, question, {new: true}, function(err, question){
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send(question);
  });
});

router.delete('/questions/:id', function(req, res){
  var id = req.params.id;
  Question.findByIdAndRemove(id, function(err, result){
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({message: 'Question Deleted'});
  });
});

module.exports = router;
