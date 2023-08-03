function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)]; //return a random section of r/p/s.
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    //loop **start the game!!
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please select Rock, Paper or Scissors");
        if (playerSelection === null || playerSelection.trim() === "") {
            console.log("Invalid selection. Please try again.");
            continue; // Skip this round and go to the next iteration
        }
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result === "Player wins") {
            playerScore++;
        }else if(result === "Computer wins") {
            computerScore++;
        }
    }
    console.log("Final score: Player " + playerScore + ", Computer" + computerScore);
    if(playerScore > computerScore) {
        console.log("Congratulations, you won!");
    }else if(computerScore > playerScore){
        console.log("Sorry, you lose");
    }else{
        console.log("It's a tie!");
    }
}

playGame();