// This allows the button to call the functio when clicked
document.getElementById('click').addEventListener('click', guesser)

/* The function below checks if the guess is greater or lower than the actual age using a loop */
function guesser () {
  // This stores 15 into the variable myage
  const myage = 15
  // This starts a while loop where the condition is if myage doesnt equal answer
  while (myage != answer) {
    /* The line below loops the prompt and sets the answer to the prompt as the variable answer */
    var answer = prompt('Please guess my age?')
    // The lines below check if the guess is correct or not
    if (answer < myage) {
      alert('Too low! Please try again')
    } else if (answer > myage) {
      alert('Too high! Please try again')
    } else if (answer == myage) {
      alert('Correct!')
    } else {
      alert('Invalid')
    }
  }
}
