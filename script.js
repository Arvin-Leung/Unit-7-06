document.getElementById('click').addEventListener('click', guesser)

function guesser () {
let myage = 15
while (myage !== answer) {
 var answer = prompt('Please guess my age?') 
  if (answer < myage) {
    alert('Too low!') 
  } else if (answer > myage) {
    alert('Too high! Please guess what is my age?') 
  } else if (answer = myage) {
    alert('Correct!')
  } else {
    alert('Invalid')
  }
}
}

// document.getElementById('result').innerHTML = "Too high! Please guess what is my age?"
// document.getElementById('result').innerHTML = "Too low! Please guess what is my age?"
// alert('Too high! Please guess what is my age?') 
// alert('Too low! Please guess what is my age?') 