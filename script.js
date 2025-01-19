const rockButton = document.querySelector(".rock-bttn");
const paperButton = document.querySelector(".paper-bttn");
const scissorsButton = document.querySelector(".scissors-bttn");

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = "";

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
  playRound();
});

paperButton.addEventListener("click", () => {
  humanChoice = "paper";
  playRound();
});

scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors";
  playRound();
});

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

function getWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(
      `
      Game Over!
      You win!
      Your score: ${humanScore}
      Computer: ${computerScore}`
    );
    return;
  }

  if (humanScore < computerScore) {
    console.log(
      `
    Game Over!
    You lose!
    Your score: ${humanScore}
    Computer: ${computerScore}`
    );
    return;
  }

  console.log(
    `
    Game Over!
    Draw!
    Your score: ${humanScore}
    Computer: ${computerScore}`
  );
}

function printScores(humanScore, computerScore) {
  console.log(
    `Your score: ${humanScore}
     Computer score: ${computerScore}`
  );
}

function playRound() {
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

  printScores(humanScore, computerScore);
}

function playGame() {
  const rounds = 5;

  let computerScore = 0;
  let humanScore = 0;

  for (i = 1; i <= rounds; i++) {
    let playerSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    console.log(`Player choice: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);

    if (i === rounds) getWinner(humanScore, computerScore);
  }
}

//playGame();
