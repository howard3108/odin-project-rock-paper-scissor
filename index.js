// wait till window loads or else querySelector wont be able to find the HTML element
window.onload = () => {
  // variables
  const rock = document.querySelector('#rock')
  const paper = document.querySelector('#paper')
  const scissor = document.querySelector('#scissor')
  const rules = document.querySelector('#rules')
  const modal = document.querySelector('#modal')
  const close = document.querySelector('#close')

  // add event listener to click and playRound
  rock.addEventListener('click', e => {
    playRound('rock', getComputerChoice())
    // reset game if comp or user win 5 times
    checkScore()
  })
  paper.addEventListener('click', e => {
    playRound('paper', getComputerChoice())

    // reset game if comp or user win 5 times
    checkScore()
  })
  scissor.addEventListener('click', e => {
    playRound('scissor', getComputerChoice())

    // reset game if comp or user win 5 times
    checkScore()
  })

  rules.addEventListener('click', () => {
    modal.style.display = 'block'
  })

  close.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  })
}

// constant
const winScore = document.querySelector('#winScore')
const loseScore = document.querySelector('#loseScore')


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

  const roundMessage = document.querySelector('#roundMessage')

  // add logic to increase score when user loses or wins
  if (playerSelection === 'rock' && computerSelection === 'scissor' ||
    playerSelection === 'scissor' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {

    // select the winScore's innerText convert it to int and add 1
    winScore.innerText = +winScore.innerText + 1

    // change innerText and display shows
    roundMessage.innerText = 'You win this round!'
    roundMessage.style.display = 'block'
  } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissor' ||
    playerSelection === 'scissor' && computerSelection === 'rock') {

    // select the loseScore's innerText convert it to int and add 1
    loseScore.innerText = +loseScore.innerText + 1

    // change innerText and display shows
    roundMessage.innerText = 'You lose this round!'
    roundMessage.style.display = 'block'
  } else {

    // change innerText and display shows
    roundMessage.innerText = 'Tied!'
    roundMessage.style.display = 'block'
  }
}

// check score function
function checkScore() {

  // constants
  const playAgain = document.querySelector('#playAgain')
  const resultModal = document.querySelector('#resultScreen')
  let winScoreText = parseInt(document.querySelector('#winScore').innerText)
  let loseScoreText = parseInt(document.querySelector('#loseScore').innerText)

  // check score if score is 5 open modal
  if (winScoreText >= 5) {
    showCorrectMessage()
    resultModal.style.display = 'block'
    playAgain.addEventListener('click', resetGame)
  } else if (loseScoreText >= 5) {
    showCorrectMessage()
    resultModal.style.display = 'block'
    playAgain.addEventListener('click', resetGame)
  }
}

function showCorrectMessage() {

  // constants
  const resultModalH2 = document.querySelector('#resultModalH2')
  const yourScore = document.querySelector('#yourScore')
  const compScore = document.querySelector('#compScore')
  const winScoreText = document.querySelector('#winScore').innerHTML
  const loseScoreText = document.querySelector('#loseScore').innerHTML

  // Set the results modal to have correct message and displays score
  if (winScoreText > loseScoreText) {
    resultModalH2.innerText = 'You Win!'
    yourScore.innerHTML = `${winScoreText}`
    compScore.innerHTML = `${loseScoreText}`
  }
  else {
    resultModalH2.innerText = 'You Lost.'
    yourScore.innerHTML = `${winScoreText}`
    compScore.innerHTML = `${loseScoreText}`
  }
}


// reset game when user or comp hit 5 games won
function resetGame() {
  // constants
  const resultModal = document.querySelector('#resultScreen')
  const roundMessage = document.querySelector('#roundMessage')

  // hide the roundMessage and resultModal and reset the score
  roundMessage.style.display = 'none'
  resultModal.style.display = 'none'
  winScore.innerText = '0'
  loseScore.innerText = '0'
}