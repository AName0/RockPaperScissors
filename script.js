/* JS script for Rock paper scissors game */

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice= 'rock';
        } else if (computerChoice === 1) {
            computerChoice = 'paper';
        } else if (computerChoice === 2) {
            computerChoice = 'scissors';
        }
    return computerChoice;
}

function playGame(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert('It\'s a draw');
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        alert("You win!, Scissors beats Rock");
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        alert('You win!, Paper beats Rock');
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        alert('You win!, Rock beats Scissors');
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        alert('You lose!, Rock beats Scissors');
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        alert('You lose!, Scissors beats Paper');
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        alert('You lose!, Paper beats Rock');
    }
    console.log(computerChoice);
    console.log(playerChoice);
}