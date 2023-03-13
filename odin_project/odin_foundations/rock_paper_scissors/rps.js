function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  const rpsChoices = ["rock", "paper", "scissors"];
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (playerSelection === null) {
    return;
  }

  console.log(
    `Player: ${ps.charAt(0).toUpperCase() + ps.slice(1)} \nComputer: ${
      cs.charAt(0).toUpperCase() + cs.slice(1)
    }`
  );

  if (rpsChoices.includes(ps.toLowerCase())) {
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
  } else {
    return `You did not select a viable option.\nPlease choose: Rock, Paper or Scissors`;
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    let userChoice = prompt(
      `Round ${round} out of 5. Choose: Rock, Paper, or Scissors`
    );
    console.log(playRound(userChoice, getComputerChoice()));
  }
}

game();
