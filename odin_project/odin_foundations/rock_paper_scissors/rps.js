function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function playRound(e) {
  let ps = e.target.dataset.rps;
  if (ps === null || ps === undefined) {
    return;
  }
  const cs = getComputerChoice().toLowerCase();

  if (ps === "paper" && cs === "scissors") {
    displayMessage("You Lose! Scissors beat Paper");
  } else if (ps === "scissors" && cs === "rock") {
    displayMessage("You Lose! Rock beats Scissors");
  } else if (ps === "rock" && cs === "paper") {
    displayMessage("You Lose! Paper beats Rock");
  } else if (ps === cs) {
    displayMessage("Tie! Try again...");
  } else {
    displayMessage(
      `You win! ${ps.charAt(0).toUpperCase() + ps.slice(1)} beats ${
        cs.charAt(0).toUpperCase() + cs.slice(1)
      }`
    );
  }
}

function displayMessage(message) {
  const resultsContainer = document.querySelector(".results-container");
  const results = document.createElement("div");
  resultsContainer.classList.add("results");
  resultsContainer.textContent = message;
  resultsContainer.replaceChild(resultsContainer, results);
}

document.addEventListener("click", playRound);
// document.addEventListener("click", (e) => console.log(e.target.dataset.rps));
