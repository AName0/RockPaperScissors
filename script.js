/* JS script for Rock paper scissors game */

let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        alert("Error: Invalid input, Please refresh the page and try again");
    }
    return playerChoice;
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
        console.log('draw');
        return drawCounter += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("You win!, Scissors beats Rock");
        console.log('player wins')
        return winCounter += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!, Paper beats Rock');
        console.log('player wins')
        return winCounter += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win!, Rock beats Scissors');
        console.log('player wins')
        return winCounter += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose!, Rock beats Scissors');
        console.log('player loses')
        return lossCounter += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose!, Scissors beats Paper');
        console.log('player loses')
        return lossCounter += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose!, Paper beats Rock');
        console.log('player loses')
        return lossCounter += 1;
    }
}

function game() {
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    if (winCounter === lossCounter) {
        alert("It's a draw")
    } else if (winCounter > lossCounter) {
        alert("You win!")
    } else {
        alert("Computer wins!")
    }
    alert("Wins: " + winCounter + "\nLosses: " + lossCounter + "\nDraws: " + drawCounter);
}

game();