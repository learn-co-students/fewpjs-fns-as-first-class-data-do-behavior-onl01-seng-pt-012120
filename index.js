/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(oldTime){
  let newTime = oldTime.split(':');
  let time = parseInt(newTime[0]);
  if (time < 12){
    return "Good Morning"
  }
  
  else if (time > 17) {
    return "Good Evening"
  }

  else {
    return "Good Afternoon"
  }
  console.log(time);
}


/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let element = document.getElementById("greeting")
  element.innerText = string; 
  
}