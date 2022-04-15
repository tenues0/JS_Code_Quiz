// questions I borrowed to save time: https://codepen.io/boopalan002/pen/yKZVGa 
var questions = [{
  question: "1. How do you write 'Hello World' in an alert box?",
  choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
  correctAnswer: 3
}, {
  question: "2. How to empty an array in JavaScript?",
  choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
  correctAnswer: 2
}, {
  question: "3. What function to add an element at the begining of an array and one at the end?",
  choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
  correctAnswer: 1
}, {
  question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
  choices: ["undefined", "0", "prints nothing", "Syntax error"],
  correctAnswer: 0
}, {
  question: "5. What would following code return? console.log(typeof typeof 1);",
  choices: ["string", "number", "Syntax error", "undefined"],
  correctAnswer: 0
},{
question: "6. Which software company developed JavaScript?",
  choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
  correctAnswer: 1
},{
question: "7. What would be the result of 3+2+'7'?",
  choices: ["327", "12", "14", "57"],
  correctAnswer: 3
},{
question: "8. Look at the following selector: $('div'). What does it select?",
  choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
  correctAnswer: 2
},{
question: "9. How can a value be appended to an array?",
  choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
  correctAnswer: 1
},{
question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
  choices: ["'32'", "'122'", "'13'", "'14'"],
  correctAnswer: 0
}];

var timerEl = document.getElementById('countdown');
var submitEl = document.querySelector("#quizStart");
var quizResultEl = document.querySelector("#result");


var message =
  'Game Over!';

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
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
}

function displayMessage() {
    timerEl.textContent = message;
}

// I need to call the countdown() function as soon as the start button is clicked.
// countdown();

submitEl.addEventListener("click", function (event) {
  console.log("event", event); //
  // Prevent default action
  event.preventDefault();
  console.log(event);

  // Start the quiz countdown
  countdown()

  var response = "Your quiz has started!";
  quizResultEl.textContent = response;
});