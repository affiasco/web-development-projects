function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  console.log(
    `Player: ${ps.charAt(0).toUpperCase() + ps.slice(1)} \nComputer: ${
      cs.charAt(0).toUpperCase() + cs.slice(1)
    }`
  );

  if (ps === "paper" && cs === "scissors") {
    return "You Lose! Scissors beat Paper";
  } else if (ps === "scissors" && cs === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (ps === "rock" && cs === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (ps === cs) {
    return "Tie! Try again...";
  } else {
    return `You win! ${ps.charAt(0).toUpperCase() + ps.slice(1)} beats ${
      cs.charAt(0).toUpperCase() + cs.slice(1)
    }`;
  }
}
console.log(playRound("rocK", getComputerChoice()));
