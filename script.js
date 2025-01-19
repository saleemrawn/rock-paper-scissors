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

function checkWinner() {
  const gameAnnoucement = document.querySelector(".game-announcement");

  if (humanScore === 5) gameAnnoucement.innerHTML = "Game over! You win.";
  if (computerScore === 5)
    gameAnnoucement.innerHTML = "Game over! You lose, computer wins.";
}

/* function getWinner(humanScore, computerScore) {
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
} */

/* function printScores(humanScore, computerScore) {
  console.log(
    `Your score: ${humanScore}
     Computer score: ${computerScore}`
  );
} */

function updateScore(player) {
  const playerLabel = document.querySelector(".player-score");
  const computerLabel = document.querySelector(".computer-score");

  if (player === "human") {
    humanScore++;
    playerLabel.innerHTML = humanScore;
    return;
  }

  if (player === "computer") {
    computerScore++;
    computerLabel.innerHTML = computerScore;
    return;
  }
}

function playRound() {
  if (humanChoice === computerChoice) console.log("Draw!");

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!, Rock beats Scissors");
    updateScore("human");
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!, Paper beats Rock");
    updateScore("human");
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!, Scissors beats Paper");
    updateScore("human");
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose!, Paper beats Rock");
    updateScore("computer");
  }

  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!, Scissors beats Paper");
    updateScore("computer");
  }

  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!, Rock beats Scissors");
    updateScore("computer");
  }
  checkWinner();
  //printScores(humanScore, computerScore);
}

/* function playGame() {
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
} */

//playGame();
