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
    else{
     return `you lose because ${computerChoice} beats ${playerChoice}`
    }  
 }

 console.log(playRound(playerSelection,computerSelection));


 function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
      console.log(`Round ${round}:`);

      const playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
      const computerSelection =

      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);

      const result = playRound(playerSelection, computerSelection);

      if (result === "player wins") {
          playerScore++;
      } else if (result === "computer wins") {
          computerScore++;
      }

      console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
      console.log();
  }

  if (playerScore > computerScore) {
    console.log("You have fought hard battles, facing tough times and relentless opponents.");
    setTimeout(() => {console.log("But with your last swing, you emerge victorious, defeating all odds.");}, 2000);
    setTimeout(() => {console.log("Enemy slain! Victory is yours!");}, 2000);
} else if (playerScore < computerScore) {
    console.log("You have fought valiantly, but the enemy proves too strong.");
    setTimeout(() => {console.log("With every effort, you stand tall, but ultimately, victory eludes your grasp.");}, 2000);
    setTimeout(() => {console.log("Defeat! The enemy has triumphed.");}, 2000);
} else {
    console.log("The battlefield echoes with the clash of steel, neither side yielding an inch.");
    setTimeout(() => {console.log("In the end, the struggle concludes in a stalemate, with neither side emerging triumphant.");}, 2000);
    setTimeout(() => {console.log("It's a draw! The battle rages on.");}, 2000);
}
}

game();

let playerSelection = 'Rock';
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
