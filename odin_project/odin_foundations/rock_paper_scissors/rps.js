let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function displayMessage(message) {
  const resultsContainer = document.querySelector(".results-container");
  const results = document.querySelector(".results");
  results.textContent = message;
  resultsContainer.replaceChild(results, results);
}

function scoreMessaging(message) {
  const scoreContainer = document.querySelector(".score-container");
  const score = document.querySelector(".score");
  score.textContent = message;
  scoreContainer.replaceChild(score, score);
}

function updateScore(roundWinner = null) {
  if (roundWinner === "player") {
    ++playerScore;
    // scoreMessaging(
    //   `Player Score: ${playerScore}, Computer Score: ${compScore}`
    // );
  } else if (roundWinner === "computer") {
    ++compScore;
    // scoreMessaging(
    //   `Player Score: ${playerScore}, Computer Score: ${compScore}`
    // );
  }

  scoreMessaging(`Player Score: ${playerScore}, Computer Score: ${compScore}`);
}

function playRound(e) {
  let ps = e.target.dataset.rps;
  if (ps === null || ps === undefined) return;

  const cs = getComputerChoice().toLowerCase();

  if (ps === "paper" && cs === "scissors") {
    displayMessage("You Lose! Scissors beat Paper");
    updateScore("computer");
  } else if (ps === "scissors" && cs === "rock") {
    displayMessage("You Lose! Rock beats Scissors");
    updateScore("computer");
  } else if (ps === "rock" && cs === "paper") {
    displayMessage("You Lose! Paper beats Rock");
    updateScore("computer");
  } else if (ps === cs) {
    displayMessage("Tie! Try again...");
    updateScore();
  } else {
    displayMessage(
      `You win! ${ps.charAt(0).toUpperCase() + ps.slice(1)} beats ${
        cs.charAt(0).toUpperCase() + cs.slice(1)
      }`
    );
    updateScore("player");
  }
  endGame();
}

function endGame() {
  let userChoice;
  if (playerScore === 5 && compScore < 5) {
    alert("Amazing...you've done it! YOU WIN!");
    location.reload();
  } else if (compScore === 5 && playerScore < 5) {
    alert("Better Luck next time. Computer wins...");
    location.reload();
  }
}

document.addEventListener("click", playRound);
