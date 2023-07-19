/* JS script for Rock paper scissors game */

let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
        } else if (computerChoice === 1) {
            return'paper';
        } else if (computerChoice === 2) {
            return 'scissors';
        } 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('It\'s a draw');
        console.log('draw');
        drawCounter += 1;
        drawCounterDisplay.textContent = `Draws: ${drawCounter}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("You win!, Scissors beats Rock");
        console.log('player wins')
        winCounter += 1;
        winCounterDisplay.textContent = `Wins: ${winCounter}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!, Paper beats Rock');
        console.log('player wins')
        winCounter += 1;
        winCounterDisplay.textContent = `Wins: ${winCounter}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win!, Rock beats Scissors');
        console.log('player wins')
        winCounter += 1;
        winCounterDisplay.textContent = `Wins: ${winCounter}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose!, Rock beats Scissors');
        console.log('player loses')
        lossCounter += 1;
        lossCounterDisplay.textContent = `Losses: ${lossCounter}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose!, Scissors beats Paper');
        console.log('player loses')
        lossCounter += 1;
        lossCounterDisplay.textContent = `Losses: ${lossCounter}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose!, Paper beats Rock');
        console.log('player loses')
        lossCounter += 1;
        lossCounterDisplay.textContent = `Losses: ${lossCounter}`;
    }
    checkScore();
}

function checkScore() {
    if (winCounter === 5) {
        alert("You win!");
    } else if (lossCounter === 5) {
        alert("Computer wins!");
    }
}

const body = document.querySelector('body');

const resultsDisplay = document.createElement('div');
body.appendChild(resultsDisplay)

const winCounterDisplay = document.createElement('p');
winCounterDisplay.textContent = `Wins: ${winCounter}`;

const lossCounterDisplay = document.createElement('p');
lossCounterDisplay.textContent = `Losses: ${lossCounter}`;

const drawCounterDisplay = document.createElement('p');
drawCounterDisplay.textContent = `Draws: ${drawCounter}`;

resultsDisplay.appendChild(winCounterDisplay);
resultsDisplay.appendChild(lossCounterDisplay);
resultsDisplay.appendChild(drawCounterDisplay);

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound('rock', getComputerChoice())); // reminder: second arg must be a function, not a function call
                                                                              // so wrap it around another function like so.
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper', getComputerChoice()))

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))