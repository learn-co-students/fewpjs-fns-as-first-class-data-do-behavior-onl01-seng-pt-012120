/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
byebug
function greet(time) {
  let split_time = time.split(":");
  let new_time = split_time[0] + split_time[1]
  let final_time = parseInt(new_time, 10)
  if (final_time < 1200) {
    return "Good Morning"
  }

  else if ((final_time >= 1200) && (final_time <= 1700)) {
    return "Good Afternoon"
  }

  else if (final_time > 1700) {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}
