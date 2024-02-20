// getComputerChoice - randomly return 'rock', 'paper' or 'scissors'
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

// Play a round of rps and determine winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const formattedPlayer = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const formattedComputer = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    let outcome;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    outcome = "draw";
                    break;
                case "paper":
                    outcome = "lose";
                    break;
                default:
                    outcome = "win";
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    outcome = "win";
                    break;
                case "paper":
                    outcome = "draw";
                    break;
                default:
                    outcome = "lose";
            }
            break;
        default:
            switch (computerSelection) {
                case "rock":
                    outcome = "lose";
                    break;
                case "paper":
                    outcome = "win";
                    break;
                default:
                    outcome = "draw";
            }
    }
    switch (outcome) {
        case "win":
            return ("You win! " + formattedPlayer + " beats " + formattedComputer);
        case "lose":
            return ("You lose! " + formattedComputer + " beats " + formattedPlayer);
        default:
            return("You draw! " + formattedPlayer + " draws with " + formattedComputer);
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));