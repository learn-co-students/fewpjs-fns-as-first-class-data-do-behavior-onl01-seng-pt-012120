/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */




// var text ='time'
// var pointNum = parseFloat(text);

// function greet(time) {
// if (time < 12) {
// return 'Good Morning';
// } else if( (12 =< time) && (time <= 17)) {
// return 'Good Afternoon';
// } else {
//   (time > 17)
// return 'Good Evening';
// }

// }
// let result = greet(time);
//  console.log(result); 


function greet(time) {
  
  let result= parseInt(time, 10)
  
if (result < 12) {
return "Good Morning";
} 
else if(result > 17) {
return "Good Evening";
}
 else  {
  
return "Good Afternoon";
}

}


/* Write your implementation of displayMessage() */
function displayMessage(greet) {

document.getElementById("greeting").innerText = greet
}