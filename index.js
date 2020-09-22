/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  const splitString = string.split(':')
  const time = splitString[0]
  const newTime = parseInt(time, 10)

  if (newTime < 12) return "Good Morning"
  if (newTime > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
