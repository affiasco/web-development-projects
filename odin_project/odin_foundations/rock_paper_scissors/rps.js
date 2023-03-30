const resultsContainer = document.querySelector(".results-container");
const results = document.querySelector(".results");
const btnContainer = document.querySelector(".button-container");
const playAgain = document.querySelector(".play-again");
const winnerDiv = document.querySelector(".winner");
const bmGif = document.querySelector(".bm-gif");
const choices = document.querySelectorAll(".choice");
const scoreContainer = document.querySelector(".score-container");
const score = document.querySelector(".score");
let playerScore = 0;
let compScore = 0;

scoreContainer.appendChild(score);

function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Metal"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function displayMessage(message) {
  results.textContent = message;
  resultsContainer.replaceChild(results, results);
}

function scoreMessaging(message) {
  score.textContent = message;
  scoreContainer.replaceChild(score, score);
}

function updateScore(roundWinner = null) {
  if (roundWinner === "player") {
    ++playerScore;
  } else if (roundWinner === "computer") {
    ++compScore;
  }

  scoreMessaging(`METALHEAD: ${playerScore} CORPORATE: ${compScore}`);
}

function playRound(e) {
  winnerDiv.classList.remove("invisible");
  results.classList.remove("invisible");
  let ps = e.target.dataset.rps;

  if (ps === null || ps === undefined) return;

  const cs = getComputerChoice().toLowerCase();

  if (ps === "paper" && cs === "metal") {
    displayMessage("You LOSE! Metal BEATS Paper");
    updateScore("computer");
  } else if (ps === "metal" && cs === "rock") {
    displayMessage("You LOSE! Rock BEATS Metal");
    updateScore("computer");
  } else if (ps === "rock" && cs === "paper") {
    displayMessage("You LOSE! Paper BEATS Rock");
    updateScore("computer");
  } else if (ps === cs) {
    displayMessage("Tie! Try again...");
    updateScore();
  } else {
    displayMessage(
      `You WIN! ${ps.charAt(0).toUpperCase() + ps.slice(1)} BEATS ${
        cs.charAt(0).toUpperCase() + cs.slice(1)
      }`
    );
    updateScore("player");
  }
  endGame();
}

function cleanUp() {
  choices.forEach((choice) => choice.classList.add("invisible"));
  playAgain.classList.remove("no-display");
  btnContainer.classList.add("no-display");
}

function endGame() {
  const winnerContainer = document.querySelector(".winner-container");
  const winner = document.querySelector(".winner");

  if (playerScore === 5 && compScore < 5) {
    winner.textContent = "Amazing...you've done it! YOU WIN!";
    bmGif.classList.remove("no-display");
    cleanUp();
  } else if (compScore === 5 && playerScore < 5) {
    winner.textContent = "Better Luck next time. Computer wins...";
    cleanUp();
  }
  winnerContainer.replaceChild(winner, winner);
}

document.addEventListener("click", playRound);

playAgain.addEventListener("click", () => {
  window.location.reload();
});
