/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const splitTime = time.split(':');

  const hour = parseInt(splitTime[0]);

  if (hour < 12) {
    return `Good Morning`;
  }
  if (hour >= 12 && hour <= 17) {
    return `Good Afternoon`;
  }
  if (hour > 17) {
    return `Good Evening`;
  }
}

function displayMessage(arg) {
  document.getElementById("greeting").innerText = arg
}