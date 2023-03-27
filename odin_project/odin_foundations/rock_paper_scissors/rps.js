function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function playRound(e) {
  let ps = e.target.dataset.rps;
  console.log(ps);
  let cs = getComputerChoice().toLowerCase();
  if (ps === null) {
    return;
  }

  if (ps === "paper" && cs === "scissors") {
    console.log("You Lose! Scissors beat Paper");
  } else if (ps === "scissors" && cs === "rock") {
    console.log("You Lose! Rock beats Scissors");
  } else if (ps === "rock" && cs === "paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (ps === cs) {
    console.log("Tie! Try again...");
  } else {
    console.log(
      `You win! ${ps.charAt(0).toUpperCase() + ps.slice(1)} beats ${
        cs.charAt(0).toUpperCase() + cs.slice(1)
      }`
    );
  }
}

document.addEventListener("click", playRound);
