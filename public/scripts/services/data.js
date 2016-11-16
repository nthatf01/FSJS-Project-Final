'use strict';

angular.module('qrQuestionApp')

.service('dataService', function($http, $q){

/*----- Load the questions from the database for use elsewhere -----*/
  this.getQuestions = function(callback){
    $http.get('api/questions')
    .then(callback)
  };

/*----- Delete a question from the database -----*/
  this.deleteQuestion = function(question) {
    if(!question._id){
      return $q.resolve();
    }
    return $http.delete('/api/questions/' + question._id).then(function() {
      console.log("Question #" + question.number + " has been deleted!");
    });
  };

/*----- Save new and edited questions -----*/
  this.saveQuestion = function(question) {
    var queue = [];
    //questions.forEach(function(question){
      var request;
      if(!question._id) {
        request = $http.post('api/questions', question)
      } else {
        request = $http.put('api/questions/'+ question._id, question).then(function(result){
          question = result.data.question;
          return question;
        })
      };
      queue.push(request);
    //});
    return $q.all(queue).then(function(results){
      console.log("I saved 1 questions");
      //console.log(question.question);
      //console.log(question.answer[]);
    });
  };
});
