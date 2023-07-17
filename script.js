/* JS script for Rock paper scissors game */
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    return playerChoice
}

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('It\'s a draw');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("You win!, Scissors beats Rock");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!, Paper beats Rock');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win!, Rock beats Scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose!, Rock beats Scissors');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose!, Scissors beats Paper');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose!, Paper beats Rock');
    }
    console.log(playerSelection);
    console.log(computerSelection);
}

function game() {
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
}

game();