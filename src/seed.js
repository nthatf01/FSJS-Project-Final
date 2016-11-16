'use strict';

var Question = require('./models/question.js');

var questions =
[
  {"number": '6', "question": 'A', ["answer": 'a']},
  {"number": '7', "question": 'B', "answer": '"a", "b", "c"'},
  {"number": '8', "question": 'C', "answer": '"a", "b", "c"'},
  {"number": '9', "question": 'D', "answer": '"a", "b", "c"'},
  {"number": '10', "question": 'E', "answer": '"a", "b", "c"'}
];

console.log("Length of seed array:" + questions.length);

for(var i = 0; i < questions.length; i++) {
  Question.create({number: questions[i].number, question: questions[i].question, answer: questions[i].answer, shalala: questions[i].letter});
};

/*
questions.forEach(function(number, letter, index) {
  Question.find({'number': number}, function(err, questions){
    if(!err && !questions.length) {
      Question.create({number: number, letter: letter});
    };
  });
});
*/
