// Get user input
function getUserChoice() {
    // prompt the user to enter choice and turn it into lower case
    const userInput = prompt('Rock, paper, or scissor?').toLowerCase();
    return ((userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') ? userInput :
        alert('Wrong input, try again!'));
}

// Get computer's choice of rock paper or scissor
function getComputerChoice() {
    // input 3 choices rock paper and scissor
    const choice = ['rock', 'paper', 'scissor'];
    // randomly select from array
    const randomChoice = Math.floor(Math.random() * choice.length);
    // return the choice of array with random number
    return choice[randomChoice];
}

// Play a round of game with user then return the result
function playRound(playerSelection, computerSelection) {
    // if user choose
    return ((playerSelection === computerSelection) ? `Tie! You both chose ${playerSelection}!` :
        (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') ? `You win! ${playerSelection} beats ${computerSelection}!` :
            `You lose! ${computerSelection} beats ${playerSelection}!`)
}

// Function of game
function result() {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    // run playRound and print result
    console.log(playRound(playerSelection, computerSelection));
}

function game() {
    for (let i = 1; i <= 5; i++) {
        result();
    }
}

game();