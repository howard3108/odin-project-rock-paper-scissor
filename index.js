// wait till window loads
window.onload = () => {
    // variables
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissor = document.querySelector('#scissor')

    // add event listener to click and playRound
    rock.addEventListener("click", e => {
        playRound('rock', getComputerChoice())

        // reset game if comp or user win 5 times
        resetGame()
    })
    paper.addEventListener("click", e => {
        playRound('paper', getComputerChoice())

        // reset game if comp or user win 5 times
        resetGame()
    })
    scissor.addEventListener("click", e => {
        playRound('scissor', getComputerChoice())

        // reset game if comp or user win 5 times
        resetGame()
    })
}

// Get computer's choice of rock paper or scissor
function getComputerChoice() {

  // input 3 choices rock paper and scissor
  const choice = ['rock', 'paper', 'scissor']

  // randomly select from array
  const randomChoice = Math.floor(Math.random() * choice.length)

  // return the choice of array with random number
  return choice[randomChoice]
}

// Play a round of game with user then return the result
function playRound(playerSelection, computerSelection) {

    // constant
    const winScore = document.querySelector('#win-score')
    const loseScore = document.querySelector('#lose-score')

    // add logic to increase score when user loses or wins
    if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        // select the winScore's innerText convert it to int and add 1
        winScore.innerText = +winScore.innerText + 1
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'rock'){
        // select the loseScore's innerText convert it to int and add 1
        loseScore.innerText = +loseScore.innerText + 1
    }
}

// reset game when user or comp hit 5 games won
function resetGame() {
    // constants
    const winScore = document.querySelector('#win-score');
    const loseScore = document.querySelector('#lose-score');
    let winScoreText = parseInt(document.querySelector('#win-score').innerText);
    let loseScoreText = parseInt(document.querySelector('#lose-score').innerText);

    // if comp or user win 5, alert user and reset score
    if (winScoreText >= 5) {
        alert('You win!');
        winScore.innerText = '0';
        loseScore.innerText = '0';
    } else if (loseScoreText >= 5) {
        alert('You lose!');
        winScore.innerText = '0';
        loseScore.innerText = '0';
    }
}