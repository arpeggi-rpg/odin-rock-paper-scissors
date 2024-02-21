function getComputerChoice() {
    result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "draw";
                case "paper":
                    return "lose";
                default:
                    return "win";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "win";
                case "paper":
                    return "draw";
                default:
                    return "lose";
            }
        default:
            switch (computerSelection) {
                case "rock":
                    return "lose";
                case "paper":
                    return "win";
                default:
                    return "draw";
            }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        const formattedPlayer = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        const formattedComputer = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        let outcome = playRound(playerSelection, computerSelection);
        switch (outcome) {
            case "win":
                console.log("You win! " + formattedPlayer + " beats " + formattedComputer);
                playerScore++;
                break;
            case "lose":
                console.log("You lose! " + formattedComputer + " beats " + formattedPlayer);
                computerScore++;
                break;
            default:
                console.log("You draw! " + formattedPlayer + " draws with " + formattedComputer);
        }
    }
    console.log("Player - " + playerScore + " | Computer - " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player Wins!");
    }
    else if (playerScore == computerScore) {
        console.log("It's a draw!");
    }
    else {
        console.log("Computer Wins!")
    }
    return;
}

playGame();