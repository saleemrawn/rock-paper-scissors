let computerScore = 0;
let humanScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const numberRoll = getRandomInt(3);
  if (numberRoll === 0) return "rock";
  if (numberRoll === 1) return "paper";
  if (numberRoll === 2) return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors?");
  return choice;
}
