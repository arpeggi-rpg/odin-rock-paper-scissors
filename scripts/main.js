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

console.log(getComputerChoice());

