/* JS script for Rock paper scissors game */

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        choice = 'rock';
        } else if (choice === 1) {
            choice = 'paper';
        } else if (choice === 2) {
            choice = 'scissors';
        }
    return choice;
}

getComputerChoice();
