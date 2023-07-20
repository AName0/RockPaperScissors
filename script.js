/* JS script for Rock paper scissors game */

let playerScore = 0;
let computerScore = 0;
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
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win!, Paper beats Rock');
        console.log('player wins')
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win!, Rock beats Scissors');
        console.log('player wins')
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose!, Rock beats Scissors');
        console.log('player loses')
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose!, Scissors beats Paper');
        console.log('player loses')
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose!, Paper beats Rock');
        console.log('player loses')
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }
    checkScore();
}

function checkScore() {
    if (playerScore === 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = 'Player Wins!';
        container.appendChild(finalResult);
    } else if (computerScore === 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = 'Computer Wins!';
        container.appendChild(finalResult);
    }
}

const container = document.querySelector('.score-container');

const resultsDisplay = document.createElement('div');
container.appendChild(resultsDisplay)

const playerScoreDisplay = document.createElement('p');
playerScoreDisplay.textContent = `Player: ${playerScore}`;

const computerScoreDisplay = document.createElement('p');
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

const drawCounterDisplay = document.createElement('p');
drawCounterDisplay.textContent = `Draws: ${drawCounter}`;

resultsDisplay.appendChild(playerScoreDisplay);
resultsDisplay.appendChild(computerScoreDisplay);
resultsDisplay.appendChild(drawCounterDisplay);

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound('rock', getComputerChoice())); // reminder: second arg must be a function, not a function call
                                                                              // so wrap it around another function like so.
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('paper', getComputerChoice()))

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))