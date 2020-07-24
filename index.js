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
// if (time < 1200) {
// return 'Good Morning';
// } else if( (1200 =< time) && (time <= 1700)) {
// return 'Good Afternoon';
// } else {
//   (time > 1700)
// return 'Good Evening';
// }

// }
// let result = greet(time);
//  console.log(result); 


function greet(time) {
  let time= the_time.split(":");
  let text= time[0].concat(time[1])
  let result= parseInt(text, 10)

  
if (result < 1200) {
return "Good Morning";
} 
else if(result > 1700) {
return "Good Afternoon";
}
 else  {
  
return "Good Evening";
}

}



/* Write your implementation of displayMessage() */
