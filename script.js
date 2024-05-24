function computerPlay() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let response_num = Math.floor(Math.random() * 3);
  let response_choice = choice[response_num];
  return response_choice;
}

// Single round play
function playRound(playerSelection, computerSelection) {
  let computerChoice = computerSelection.toLowerCase();
  let playerChoice = playerSelection.toLowerCase();

  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')) {
    return `You win because ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === computerChoice) {
    return "It's a tie";
  } else {
    return `You lose because ${computerChoice} beats ${playerChoice}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

    let playerSelection;
    while (true) {
      playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
      if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        break;
      } else {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
      }
    }
    const computerSelection = computerPlay();

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }

    console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
    console.log();
  }

  if (playerScore > computerScore) {
    console.log("You have fought hard battles, facing tough times and relentless opponents.");
    setTimeout(() => {console.log("But with your last swing, you emerge victorious, defeating all odds.");}, 2000);
    setTimeout(() => {console.log("Enemy slain! Victory is yours!");}, 4000);
  } else if (playerScore < computerScore) {
    console.log("You have fought valiantly, but the enemy proves too strong.");
    setTimeout(() => {console.log("With every effort, you stand tall, but ultimately, victory eludes your grasp.");}, 2000);
    setTimeout(() => {console.log("Defeat! The enemy has triumphed.");}, 4000);
  } else {
    console.log("The battlefield echoes with the clash of steel, neither side yielding an inch.");
    setTimeout(() => {console.log("In the end, the struggle concludes in a stalemate, with neither side emerging triumphant.");}, 2000);
    setTimeout(() => {console.log("It's a draw! The battle rages on.");}, 4000);
  }
}

game();
