/* JS script for Rock paper scissors game */

let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
hideRestartButton();

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
        } else if (computerChoice === 1) {
            return"Paper";
        } else if (computerChoice === 2) {
            return "Scissors";
        } 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        drawCounter += 1;
        drawCounterDisplay.textContent = `Draws: ${drawCounter}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "It's a draw";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "You win, Scissors beats Paper";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "You win, Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "You win, Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        computerChoice.textContent = `The computer chose ${computerSelection}`;
        roundOutcome.textContent = "You lose, Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "You lose, Scissors beats Paper";
    } else if (playerSelection === "Rock' && computerSelection === 'Paper") {
        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        computerChoice.textContent = `The Computer chose ${computerSelection}`;
        roundOutcome.textContent = "You lose, Paper beats Rock";
    }
    checkScore();
}

function endGame() {
    disableGameButtons();
    showRestartButton();
}

function restartGame() {
    resetScores();
    resetText();
    hideRestartButton();
    enableGameButtons();
    resultsDisplay.removeChild(resultsDisplay.lastElementChild);
    resultsDisplay.removeChild(resultsDisplay.lastElementChild);
    container.removeChild(container.lastElementChild);
    resultsDisplay.appendChild(computerChoice);
    resultsDisplay.appendChild(roundOutcome);
}

function checkScore() {
    if (playerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = "Player Wins!";
        container.appendChild(finalResult);
        endGame();
    } else if (computerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = "Computer Wins!";
        container.appendChild(finalResult);
        endGame();
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    drawCounter = 0;
}

function resetText() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    drawCounterDisplay.textContent = `Draws: ${drawCounter}`;
    computerChoice.textContent = "";
    roundOutcome.textContent = "";
}

function hideRestartButton() {
    document.getElementById("restart").hidden = true;
    document.getElementById("restart").disabled = true;
}

function showRestartButton() {
    document.getElementById("restart").hidden = false;
    document.getElementById("restart").disabled = false;
}

function disableGameButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function enableGameButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

const container = document.querySelector(".score-container");

const resultsDisplay = document.createElement("div");
resultsDisplay.className = "results";
container.appendChild(resultsDisplay);

const computerChoice = document.createElement("p");

const roundOutcome = document.createElement("p");

const playerScoreDisplay = document.createElement("p");
playerScoreDisplay.textContent = `Player: ${playerScore}`;

const computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

const drawCounterDisplay = document.createElement("p");
drawCounterDisplay.textContent = `Draws: ${drawCounter}`;

resultsDisplay.appendChild(playerScoreDisplay);
resultsDisplay.appendChild(computerScoreDisplay);
resultsDisplay.appendChild(drawCounterDisplay);
resultsDisplay.appendChild(computerChoice);
resultsDisplay.appendChild(roundOutcome);

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound('Rock', getComputerChoice())); // reminder: second arg must be a function, not a function call
                                                                              // so wrap it around another function like so.
const paper = document.querySelector("#paper");
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()))

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => playRound('Scissors', getComputerChoice()))

const restart = document.querySelector("#restart");
restart.addEventListener('click', () => restartGame())