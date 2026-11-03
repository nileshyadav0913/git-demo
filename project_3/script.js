
let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#sub');
const usernIput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

// Event listener
submit.addEventListener('click', function(e) {
    e.preventDefault();

    if (!playGame) return;

    const guess = Number(usernIput.value);

    validateGuess(guess);
});

// Validate user input
function validateGuess(guess) {

    if (usernIput.value.trim() === '' || isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess < 1) {
        alert("Please enter a number greater than 0");
    }
    else if (guess > 100) {
        alert("Please enter a number less than 101");
    }
    else {
        prevGuess.push(guess);
        numGuess++;

        displayGuess(guess);
        checkGuess(guess);
    }
}

// Check the guess
function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage("You guessed the right number!");
        endGame();
    }
    else if (numGuess === 10) {
        displayMessage(`Game over! Random number was ${randomNumber}`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("Number is too low");
    }
    else {
        displayMessage("Number is too high");
    }
}

// Display previous guesses
function displayGuess(guess) {

    usernIput.value = '';

    guessSlot.innerHTML = prevGuess.join(', ');

    remaining.innerHTML = `${10 - numGuess}`;
}

// Display message
function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

// Start new game
function newGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    prevGuess = [];
    numGuess = 0;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';

    usernIput.removeAttribute('disabled');

    lowOrhi.innerHTML = '';

    p.remove();

    playGame = true;
}

// End game
function endGame() {

    usernIput.value = '';
    usernIput.setAttribute('disabled', '');

    p.classList.add('button');

    p.innerHTML = `<button id="newGame">Start New Game</button>`;

    startOver.appendChild(p);

    playGame = false;

    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click', newGame);
}
