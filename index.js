/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(str) {
  let hh = str.split(":")[0]
  let mm = str.split(":")[1]
  if (Number(hh) < 12) {
    return "Good Morning";
  }
  else if (Number(hh) > 11 && Number(hh) < 17) {
      return "Good Afternoon";
    }
  else {
    return "Good Evening"
  }
}

function displayMessage(str) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = str;
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
