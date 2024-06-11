//logic for what choice beats what or ties
let rock;
let paper;
let scissors;
const h1 = document.createElement("h1");
let computerSelection;
let humanScore = 0;
let computerScore = 0;
let getHumanChoice;

// New Game
const NewGame = document.getElementsByClassName("New-Game");
NewGame[0].addEventListener("click", gamestart);

// COMPUTER CHOICE
function computerChoice() {
  let cc = Math.floor(Math.random() * 3) + 1;
  if (cc === 1) {
    computerSelection = "ROCK";
  } else if (cc === 2) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "PAPER";
  }
  console.log(`${computerSelection} is computer choice`);
}

function playRound(computerSelection, getHumanChoice) {
  function computerChoice() {
    let cc = Math.floor(Math.random() * 3) + 1;
    if (cc === 1) {
      computerSelection = "ROCK";
    } else if (cc === 2) {
      computerSelection = "SCISSORS";
    } else {
      computerSelection = "PAPER";
    }
    console.log(`${computerSelection} is computer choice`);
  }
  computerChoice();
  getHumanChoice = prompt("Human Slection").toUpperCase();

  if (computerSelection === getHumanChoice) {
    alert(`Both players chose ${computerSelection} 
      Round is a draw`);
    i--;
    console.log(`Round is ${i}`);
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
  } else if (
    (computerSelection === "PAPER" && getHumanChoice === "SCISSORS") ||
    (computerSelection === "SCISSORS" && getHumanChoice === "ROCK") ||
    (computerSelection === "ROCK" && getHumanChoice === "PAPER")
  ) {
    console.log(`${getHumanChoice} beats ${computerSelection}, Human Wins`);
    humanScore += 1;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
  } else {
    console.log(`${computerSelection} beats ${getHumanChoice} Computer Wins`);
    computerScore += 1;
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
  }
}

function gamestart() {
  computerScore = 0;
  humanScore = 0;
  for (i = 1; i < 6; i++) {
    playRound();
    console.log(`Round is ${i}`);
  }
}
//game round 1/3 (in html shows current round)
///computer choice (in html shows computer choice which is a random)
///player choice
///compare choices to decide winner
//allocate point to winner
//start new round
//first player to 3 points wins
