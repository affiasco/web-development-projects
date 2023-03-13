function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

console.log(getComputerChoice());
