'use strict';

angular.module('qrQuestionApp')

.service('dataService', function($http){

/*----- Load the questions from the database for use elsewhere -----*/
  this.getQuestions = function(callback){
    $http.get('mock/questions.json')
    .then(callback)
  };

/*----- Delete a question from the database -----*/
  this.deleteQuestion = function(question) {
    console.log("Question #" + question.number + " has been deleted!")
  };

/*----- Save new and edited questions -----*/
  this.saveQuestion = function(question) {
    console.log("Question #" + question.number + " has been saved!")
  };
});
