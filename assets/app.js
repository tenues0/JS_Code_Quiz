// questions I borrowed to save time: https://codepen.io/boopalan002/pen/yKZVGa 
var questions = [{
  question: 'Does this question display?',
  option1: '  1. No',
  option2: '  2. Hell no',
  option3: '  3. Yes',
  option4: '  4. Sometimes',
  answer: 3,
},
{
  question: 'How about this question?',
  option1: '  1. It will tomorrow',
  option2: '  2. Yes because you are awesome at coding',
  option3: '  3. Yes',
  option4: '  4. Hell no',
  answer: 2,
},]

var timerEl = document.getElementById('countdown');
var submitEl = document.querySelector("#quizStart");
var quizResultEl = document.querySelector("#result");


var message =
  'Game Over!';

localStorage.setItem("timeLeft", 75);