





//single round play

function playRound( playerSelection,computerSelection){

  const computerChoice = computerSelection.toLowerCase();
 const playerChoice =  playerSelection.toLowerCase();

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
  (playerChoice === 'scissors' && computerChoice === 'paper') ||
  (playerChoice === 'paper' && computerChoice === 'rock')) 
  {
   return `you win because ${playerChoice} beats ${computerChoice}`
  }

  else if(playerChoice===computerChoice)
 
    {
     return "its a tie"
    }

    else{
     return `you lose because ${computerChoice} beats ${playerChoice}`
    }
 }

 const playerSelection = 'Rock';
 const computerSelection = computerPlay();

 console.log(playRound(playerSelection,computerSelection));