/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hour = parseInt(time.split(':')[0]);
  if (hour < 12) {return "Good Morning";}
  else if (hour > 12) {
    if (hour < 17) {return "Good Afternoon";}
    else if (hour > 17) {return "Good Evening";}
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(g) {
  let hello = document.getElementById("greeting");
  hello.innerText = g
}