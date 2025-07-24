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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let resultMessage = '';
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    resultMessage = `You won! ${humanChoice} beats ${computerChoice}`;
  }
  resultsDiv.textContent = resultMessage;
  scoreDiv.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;

  checkWinner();
}


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const resultsDiv = document.querySelector('#results-display');
const scoreDiv = document.querySelector('#score-display');

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

function checkWinner() {
  if (humanScore === 5) {
    resultsDiv.textContent = 'Congratulations! You won the game!';
    
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } 
  else if (computerScore === 5) {
    resultsDiv.textContent = 'Game Over! The computer won.';

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}
