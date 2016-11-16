'use strict';

angular.module('qrQuestionApp')

/*----- Main Controller for the Question Application -----*/
.controller('mainCtrl', function($scope, dataService){

  $scope.player = {
    "playerName": "unknown",
    "playerQuestionsAsked": 0,
    "playerQuestionsCorrect": 0
  }

  dataService.getQuestions(function(response){
    console.log(response.data);
    $scope.questions = response.data.questions;
    $scope.randomQuestion = $scope.questions[Math.floor(Math.random() * $scope.questions.length)];
  });
})

.controller('tabCtrl', function($scope){
  $scope.sel = 1;
})

/*----- Controller for the Quiz Tab -----*/
.controller('quizCtrl', function($scope, dataService){

/*----- getRandomQuestion checks the Player's answer, then randomly selects a new question-----*/
  $scope.getRandomQuestion = function(questions, userAnswer){
    console.log(userAnswer);
    var correctAnswer = false;
    for(var i = 0; i < $scope.randomQuestion.answer.length; i++) {
      if(userAnswer.toUpperCase() === $scope.randomQuestion.answer[i]) {
        correctAnswer = true;
        $scope.player.playerQuestionsCorrect++;
      }
    }
    $scope.player.playerQuestionsAsked++;
    console.log("Score: " + $scope.player.playerQuestionsCorrect + " / " + $scope.player.playerQuestionsAsked);
    console.log(correctAnswer);
    $scope.randomQuestion = $scope.questions[Math.floor(Math.random() * $scope.questions.length)];
    //$("#userAnswerBox").val('');
  };
})

/*----- Controller for the Question Admin Tab -----*/
.controller('questionManagementCtrl', function($scope, dataService){

  $scope.addQuestion = function() {
    var question = {question: "NEW QUESTION"};
    $scope.questions.push(question);
  };

  $scope.deleteQuestion = function(question, $index) {
    dataService.deleteQuestion(question).then(function(){
      $scope.questions.splice($index, 1);  
    });
  };

  $scope.saveQuestion = function(question){
    dataService.saveQuestion(question);
  };
});
