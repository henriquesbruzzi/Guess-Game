'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let BESTVALUE = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else {
    //When  player wins
    if (guess == number) {
      displayMessage('🎉 Correct');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

      if (score > BESTVALUE) {
        document.querySelector('.highscore').textContent = score;
        BESTVALUE = score;
      }
    } else if (guess !== number) {
      displayMessage(guess > number ? 'Too HIGH ☝️' : 'Too LOW 👎');
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game 😓');
      }
    }
  }
});

//The manipulation of button Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ''; // button with empty value
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;
});
