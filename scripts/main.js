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
    if (gameCounter >= 5) {
        gameCounter = 0;
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.lastChild);
        }
    }
    gameCounter += 1;
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

const displayResults = function (gameResult, playerSel, computerSel) {
    let gameP = document.createElement('p');
    let resultP = document.createElement('p');
    let scoreP = document.createElement('p');
    let gameOverP = document.createElement('p');

    gameP.textContent = ('Player plays ' + playerSel + ', Computer plays ' + computerSel);
    switch (gameResult) {
        case gameResult = 'win':
            resultP.textContent = 'Player wins!';
            playerScore += 1;
            scoreP.textContent = ('Player - ' + playerScore + ' | Computer - ' + computerScore);
            break; 
        case gameResult = 'draw':
            resultP.textContent = 'Draw!';
            scoreP.textContent = ('Player - ' + playerScore + ' | Computer - ' + computerScore);
            break;
        default:
            resultP.textContent = 'Computer wins!';
            computerScore += 1;
            scoreP.textContent = ('Player - ' + playerScore + ' | Computer - ' + computerScore);
    }
    resultsContainer.appendChild(gameP);
    resultsContainer.appendChild(resultP);
    resultsContainer.appendChild(scoreP);
    if (gameCounter >= 5) {
        if (playerScore > computerScore) {
            gameOverP.textContent = 'Player is the winner!';
        }
        else if (playerScore == computerScore) {
            gameOverP.textContent = 'The game\'s a draw!';
        }
        else {
            gameOverP.textContent = 'Computer is the winner!';
        }
        gameOverP.textContent += ' Press a button to play again'
        resultsContainer.appendChild(gameOverP);
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsContainer = document.querySelector('#resultsContainer');
let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    displayResults(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});
paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    displayResults(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});
scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    displayResults(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
});
