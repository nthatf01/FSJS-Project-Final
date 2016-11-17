'use strict';

angular.module('qrQuestionApp')

/*----- Main Controller for the Question Application -----*/
.controller('mainCtrl', function($scope, dataService){

/*----- Create the Player object to track the score -----*/
  $scope.player = {
    "playerName": "unknown",
    "playerQuestionsAsked": 0,
    "playerQuestionsCorrect": 0
  }

/*----- Grab the questions and set an initial random questions -----*/
  dataService.getQuestions(function(response){
    console.log(response.data);
    $scope.questions = response.data.questions;
    $scope.randomQuestion = $scope.questions[Math.floor(Math.random() * $scope.questions.length)];
  });
})

/*----- Initialize the tab navigation to start on the Quiz Tab -----*/
.controller('tabCtrl', function($scope){
  $scope.sel = 1;

/*----- Change selected tab on click -----*/
  $scope.selectedTab = function(clickedNavTab){
    document.getElementById("quiz").className = "";
    document.getElementById("qadmin").className = "";
    document.getElementById("tbd").className = "";
    document.getElementById(clickedNavTab).className = "activeTab";
  };
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

/*----- Clears the userAnswerBox -----*/
    document.getElementById("userAnswerBox").value = "";
    //$("#userAnswerBox").val('');
  };
})

/*----- Controller for the Question Admin Tab -----*/
.controller('questionManagementCtrl', function($scope, dataService){

/*----- Add a blank new question -----*/
  $scope.addQuestion = function() {
    var question = {question: "NEW QUESTION"};
    $scope.questions.push(question);
  };

/*----- Deletes a question from the database -----*/
  $scope.deleteQuestion = function(question, $index) {
    dataService.deleteQuestion(question).then(function(){
      $scope.questions.splice($index, 1);
    });
  };

/*----- Saves edited questions -----*/
  $scope.saveQuestion = function(question){
    dataService.saveQuestion(question);
  };
});
