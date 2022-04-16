var timerEl = document.getElementById('countdown');
var submitEl = document.querySelector("#quizStart");
var quizResultEl = document.querySelector("#result");
var name = document.querySelector("#fname");


var userInitials = prompt("Enter Your Initials");
localStorage.setItem("userInitials", userInitials + ' - '+localStorage.getItem("timeLeft"))
// var highScores = [];
// localStorage.setItem("highScores", highScores);


timerEl.textContent = localStorage.getItem("userInitials");