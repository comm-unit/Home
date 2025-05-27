document.addEventListener('DOMContentLoaded', function() {
  console.log("Commerce Unit Website Loaded");
  // You can add interactive features here (e.g., form validation, AJAX submission, animations).
});


// Get the countdown elements
var daysElement = document.querySelector('.days');
var hoursElement = document.querySelector('.hours');
var minutesElement = document.querySelector('.minutes');
var secondsElement = document.querySelector('.seconds');

// Set the countdown target date
var targetDate = new Date('November 10, 2025 00:00:00');

// Function to update the countdown
function updateCountdown() {
  var currentDate = new Date();
  var timeLeft = targetDate - currentDate;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();
