'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting condtition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let ActivePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function() {``
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // Changed 'scr' to 'src'

  // 3 check for rolled 1: if true

  if(dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${ActivePlayer}`).textContent = 0;

    ActivePlayer = ActivePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');

  }
  }
);

btnHold.addEventListener('click', function () {

  // // 1. add current score to active
  scores(activePlayer) += currentScore;
  score[1] = score[1]
  // 2. check if player's score is >= 100
  // finish the Game
  // switch to the next player

})
