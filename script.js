let numbers = [];
let currentIndex = 0;
let highestNumber = 0;

function generateRandomNumbers() {
  const MIN_VALUE = 1; // Minimum value for random numbers
  const MAX_VALUE = 1e100; // Maximum value for random numbers
  numbers = Array.from({ length: 20 }, () => Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE);
}

function turnOver() {
  if (currentIndex < numbers.length) {
    const currentNumber = numbers[currentIndex];
    currentIndex++;
    updateDisplay(currentNumber);

    if (currentNumber > highestNumber) {
      highestNumber = currentNumber;
    }

    if (currentIndex === 10) {
      document.getElementById('guessBtn').style.display = 'block';
      document.getElementById('turnOverBtn').disabled = true;
    }
  }
}

function updateDisplay(currentNumber) {
  const displayArea = document.getElementById('displayArea');
  displayArea.innerHTML += currentNumber + '<br>';
}

function makeGuess() {
  document.getElementById('guessBtn').disabled = true;
  alert('Your guess is: ' + highestNumber);
}
