/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hourStr = time.split(':')
  let hourInt = parseInt(hourStr[0]);
  if (hourInt < 12) {
    return "Good Morning";
  } else if ((hourInt >= 12 && hourInt <= 17)) {
    return "Good Afternoon";
  } else {
      return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  // document.querySelector("#greeting").textContent = `${greeting}`;
  document.getElementById("greeting").innerText = `${greeting}`;
}
