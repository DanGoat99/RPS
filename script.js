//logic for what choice beats what or ties
let rock;
let paper;
let scissors;
const h1 = document.createElement("h1");
let ComputerWeapon;
let humanScore;
let computerScore;

// New Game
const NewGame = document.getElementsByClassName("New-Game");
NewGame[0].addEventListener("click", gamestart);
function gamestart() {
  console.log("hello world");
  computerChoice();
  console.log(ComputerWeapon);
  getHumanChoice;
}

// COMPUTER CHOICE
function computerChoice() {
  let cc = Math.floor(Math.random() * 3) + 1;
  if (cc === 1) {
    ComputerWeapon = "ROCK";
  } else if (cc === 2) {
    ComputerWeapon = "SCISSORS";
  } else {
    ComputerWeapon = "PAPER";
  }
}

//HUMAN CHOICE

const getHumanChoice = function = prompt("Human Selection");
};

//game round 1/3 (in html shows current round)
///computer choice (in html shows computer choice which is a random)
///player choice
///compare choices to decide winner
//allocate point to winner
//start new round
//first player to 3 points wins

// offer rematch
