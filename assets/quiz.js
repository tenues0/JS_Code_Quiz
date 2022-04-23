var timerEl = document.getElementById('countdown');
var submitEl = document.querySelector("#quizStart");
var quizResultEl = document.querySelector("#result");

// Timer that counts down from 75
function countdown() {
    timeLeft = localStorage.getItem("timeLeft");
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        localStorage.setItem("timeLeft", timeLeft);
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
  
  // Start the quiz countdown
  countdown()
  // I need to call the countdown() function as soon as the start button is clicked.
  // countdown();
  

  submitEl.addEventListener("click", function (event) {
    console.log("event", event); //
    // Prevent default action
    event.preventDefault();
    console.log(event);

    var response = "Your quiz has started!";
    quizResultEl.textContent = response;
  });