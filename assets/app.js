// variables for all the screens used in the game
var welcomeScreen = document.querySelector('.welcome');
var questionScreen = document.querySelector('.quizQuestions');
var scoreScreen = document.querySelector('.scoreSheet');
var highScoreScreen = document.querySelector('.highscores');
// need to hide some of the screen at the beginning of the game
// https://www.geeksforgeeks.org/what-is-the-difference-between-visibilityhidden-and-displaynone/
document.querySelector('.quizQuestions').style.display = 'none';
document.querySelector('.scoreSheet').style.display = 'none';
document.querySelector('.highscores').style.display = 'none';

var timerEl = document.getElementById('countdown');
var startEl = document.querySelector('.quizStart');
var individualQuestion = document.querySelector('.question');
var result = document.querySelector('.result');

// variables for the buttons
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var possibleAnswers = document.querySelector('.answer-container');


// other variables needed
var correctAnswerButton;
var wrongAnswerButton;
var theButtonPushed;
var timeLeft = 75;
var correctAnswer;

// Some random questions
var questionsArray =
  [
    {
      question: "Does this question display?",
      choices: ["Yes", "No", "Hell No", "Sometimes"],
      realAnswer: "Sometimes"
    },

    {
      question: "How about this question?",
      choices: ["Yes", "No", "It will tomorrow", "Yes because you are awesome at coding"],
      realAnswer: "Yes"
    },
    {
      question: "Can you believe that this pops up on the screen?",
      choices: ["Yes", "No", "It's 'bout damn time", "Finally!"],
      realAnswer: "It's 'bout damn time"
    },
    {
      question: "Will this developer get paid?",
      choices: ["Yes", "No", "Not yet", "Maybe"],
      realAnswer: "Not yet"
    },
  ];

// Timer that counts down from 75, borrowed from week 5 activity 10
function countdown() {
  // var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
};
// Game over message
var message =
  'Game Over!';
function displayMessage() {
  timerEl.textContent = message;
};

// Game start button function
// Game timer starts and first question display on the screen
startEl.addEventListener("click", function (event) {
  // Prevent default action
  event.preventDefault();

  // make the first question screen visible and hide all other screens
  // https://www.geeksforgeeks.org/what-is-the-difference-between-visibilityhidden-and-displaynone/
  document.querySelector('.welcome').style.display = 'none';
  document.querySelector('.quizQuestions').style.display = 'block';
  document.querySelector('.scoreSheet').style.display = 'none';
  document.querySelector('.highscores').style.display = 'none';
  // game timer begins
  countdown();

  // run question function
  questionFunction();

});
var i = 0;

// function that runs through the questions
function questionFunction() {
  // iterate through questions array and display question
  var quizQues = questionsArray[i].question;
  // this line of code prints the quiz question onto the screen
  individualQuestion.textContent = quizQues;

  // this line of code pulls up the answer array
  var answerArray = questionsArray[i].choices;
  console.log(answerArray);
  var correctAnswerIndex = questionsArray[i].realAnswer - 1;
  console.log("correctAnswerIndex " + correctAnswerIndex);

  // this line of code rints the correct answer to the console
  var correctAnswer = answerArray[correctAnswerIndex];
  console.log("The correct answer is: " + correctAnswer);

  // populate buttons with possible answers from answer array
  button1.textContent = answerArray[0];
  button2.textContent = answerArray[1];
  button3.textContent = answerArray[2];
  button4.textContent = answerArray[3];

  // checkAnswer(correctAnswer);
};


// the event listener in this function is getting called multiple times
function checkAnswer(event) {
  console.log("Here is the i !!! " + i);
    if (event.target.className == "button") {
      console.log("Clicked", event.target.textContent);
      if (event.target.textContent == questionsArray[i].realAnswer) {
        console.log("correct answer selected");
        result.textContent = "correct answer selected";
        if (i == questionsArray.length - 1) {
          checkIfLastQuestion()
          console.log("test")
        } else {
          i++;
          console.log("i++ " + i);
          questionFunction()
        }
      } else {
        console.log("wrong answer selected");
        result.textContent = "wrong answer selected";
        subtractTime();
        if (i == questionsArray.length - 1) {
          checkIfLastQuestion()
        } else {
          i++;
          console.log("i++ " + i);
          questionFunction()
        }
      }
    }
  
};


function subtractTime() {
  timeLeft -= 10;
}



function checkIfLastQuestion() {
    // hide questions
    // display scoresheet
    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.quizQuestions').style.display = 'none';
    document.querySelector('.scoreSheet').style.display = 'block';
    document.querySelector('.highscores').style.display = 'none';
    // user can enter in name for score
  }


// Had to pull the event listener out of the function.
// when the event listener was in the function it was getting tripped
// more than once
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);








// localStorage.setItem("timeLeft", 75);

/*
first question screen appears
-- user selects answer
asscociate correct answer with a button, all incorrect answers with all other buttons

GOOGLE: javascript associating a button with correct answer


--user is told if answer is correct or incorrect
--score logged (time kept the same or subtracted from)
next question appears
repeat correct/incorrect functionality, score
all questions answered
score shown
user can log name onto scoreboard
*/