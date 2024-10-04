// script.js
let player1Position = 0;
let player2Position = 0;
let currentPlayer = 1;

const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceResult = document.getElementById("diceResult");
const player1Display = document.getElementById("player1Position");
const player2Display = document.getElementById("player2Position");

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = "Dice: " + diceValue;

  if (currentPlayer === 1) {
    player1Position += diceValue;
    player1Display.textContent = "Position: " + player1Position;
    if (player1Position >= 9) {
      alert("Player 1 wins!");
      resetGame();
    } else {
      currentPlayer = 2; // Switch to Player 2
    }
  } else {
    player2Position += diceValue;
    player2Display.textContent = "Position: " + player2Position;
    if (player2Position >= 9) {
      alert("Player 2 wins!");
      resetGame();
    } else {
      currentPlayer = 1; // Switch to Player 1
    }
  }
}

function resetGame() {
  player1Position = 0;
  player2Position = 0;
  player1Display.textContent = "Start";
  player2Display.textContent = "Start";
  currentPlayer = 1;
}

rollDiceBtn.addEventListener("click", rollDice);
