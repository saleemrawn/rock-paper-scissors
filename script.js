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
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) console.log("Draw!");

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!, Rock beats Scissors");
    humanScore++;
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!, Paper beats Rock");
    humanScore++;
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!, Scissors beats Paper");
    humanScore++;
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose!, Paper beats Rock");
    computerScore++;
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!, Scissors beats Paper");
    computerScore++;
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!, Rock beats Scissors");
    computerScore++;
  }
}
