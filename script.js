//computer reponse
function computerPlay() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let reponse_num = Math.floor(Math.random() * 3);
  let reponse_choice = choice[reponse_num];
  return reponse_choice;
}

//single round play

function playRound(playerSelection, computerSelection) {

  let computerChoice = computerSelection.toLowerCase();
  let playerChoice = playerSelection.toLowerCase();

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')) {
    return `you win because ${playerChoice} beats ${computerChoice}`
  }

  else if (playerChoice === computerChoice) {
    return "its a tie"
  }

  else {
    return `you lose because ${computerChoice} beats ${playerChoice}`
  }
}



let playerSelection = 'Rock';
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));