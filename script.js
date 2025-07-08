function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice == 1) {
    return "rock";
  } else if (computerChoice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter either Rock, Paper, or Scissors");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  }
  console.log(`Score is:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
}


function playGame() {
  let i = 0;
  while(i < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    i++;
  }
}
playGame();
