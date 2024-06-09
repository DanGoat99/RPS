//logic for what choice beats what or ties
let rock;
let paper;
let scissors;
const h1 = document.createElement("h1");
let computerSelection;
let humanScore;
let computerScore =0;
let getHumanChoice=0;

// New Game
const NewGame = document.getElementsByClassName("New-Game");
NewGame[0].addEventListener("click", gamestart);

function gamestart() {
  console.log("hello world");
  computerChoice();
  console.log(computerSelection);
  //HUMAN CHOICE
  getHumanChoice = prompt("Human Selection").toUpperCase();
  //getHumanChoice = getHumanChoice.toUpperCase;
  console.log(getHumanChoice);
}

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
}

function playRound(computerSelection, getHumanChoice) {
  if (computerSelection === "ROCK" && getHumanChoice === "SCISSORS"){computerScore++1};
  else if (computerSelection==="ROCK" && getHumanChoice==="PAPER"){humanScore++1};
  else if (computerSelection==="PAPER" && getHumanChoice==="ROCK") {}

  else {/*draw playRound*/}
}

//game round 1/3 (in html shows current round)
///computer choice (in html shows computer choice which is a random)
///player choice
///compare choices to decide winner
//allocate point to winner
//start new round
//first player to 3 points wins

// offer rematch
