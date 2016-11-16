angular.module('qrQuestionApp')
.directive('questions', function(){
  return {
    templateUrl: 'templates/questions.html',
    controller: 'mainCtrl',
    replace: true
  }
});
