// /////////// DOM ELEMENTS //////////
let body = document.querySelector('body')
let board = document.querySelector('#board')
let square = document.querySelector('.box')
let allBoxes = Array.from(document.querySelectorAll('.box'))
// let allX = document.querySelectorAll()

let winBanner = document.querySelector('.winner')
let banner = document.querySelector('#banner')
let turnArrow = document.querySelector('#turn-arrow')


let gameState = {
  players: ['x', 'o'],
  board: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ],
  counter: 0,
  winner: null
}


function newGame() {

  gameState = {
    players: ['x', 'o'],
    board: [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ],
    counter: 0,
    winner: null
  }

  for (i in allBoxes) {
    allBoxes[i].innerText = ''
  }

  banner.removeChild(banner.firstChild)
  banner.appendChild(document.createElement('h2'))
  banner.firstChild.className = 'current-player'
  banner.firstChild.innerText = `${gameState.players[0].toUpperCase()} goes first!`
  body.removeChild(body.lastChild)
  turnArrow.style.justifyContent = 'flex-start'
  turnArrow.style.visibility = 'visible'

}

function switchPlayers() {
  gameState.players.reverse();
}

function makeMove(event) {
  let turn = document.querySelector('.current-player')
  let target = event.target
  let updateBoard = () => {
    let x = target.className.split(' ')[1].split('')[1]
    let y = target.className.split(' ')[1].split('')[2]
    gameState.board[x][y] = gameState.players[0]
  }

  if (gameState.winner === null) {
    if (target.className.split(' ')[0] === 'box' && target.innerText === '') {
      target.innerText = gameState.players[0].toUpperCase()
      if (gameState.players[0] === 'x') {
        target.style.color = '#ef767a';
      } else {
        target.style.color = '#00b2ca';

      }
      updateBoard();
      gameState.counter++
      if (gameState.players[0] === 'x') {
        turnArrow.style.justifyContent = 'flex-end'
      } else {
        turnArrow.style.justifyContent = 'flex-start'
      }
      if (gameState.counter >= gameState.board[0].length + 2) {
        if (checkWinner() === true) {
          gameState.winner = gameState.players[0]
        }
      }
      switchPlayers();
      turn.innerText = `It's ${gameState.players[0].toUpperCase()}'s turn!`
      if (gameState.winner != null) {
        endGame()
      }
      if (gameState.counter >= 9) {
        endGame()
      }
    }
  }
  console.dir(target);
  // console.log(gameState.winner)
  // console.dir(checkHorizontal())
  // console.dir(checkVertical())

}

board.addEventListener('click', (event) => makeMove(event))

let regexMatch = (input) => {
  return (input.match(/xxx|ooo/) ? true : false)
}

function checkHorizontal() {
  let horizontal = []
  for (let i in gameState.board) {
    horizontal.push(gameState.board[i].join(''))
  }
  return regexMatch(horizontal.join(' '))
}

function checkVertical() {
  let vertical = []
  for (let j = 0; j <= gameState.board.length - 1; j++) {
    let string = ''
    for (let i = 0; i <= gameState.board.length - 1; i++) {
      string += gameState.board[i][j]
    }
    vertical.push(string)
  }
  return regexMatch(vertical.join(' '))
}

function checkDiagonal() {
  let diagonal = []
  let j = 2
  for (let i = 0; i <= gameState.board.length - 1; i++) {
    diagonal += gameState.board[i][j]
    j--;
  }
  diagonal += ' '
  for (let i = 0; i <= gameState.board.length - 1; i++) {
    diagonal += gameState.board[i][i];
  }
  return regexMatch(diagonal)
}

function checkWinner() {
  if (checkHorizontal()) {
    return true
  }
  if (checkVertical()) {
    return true
  }
  if (checkDiagonal()) {
    return true
  }
}

function deleteAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function endGame() {
  const newDiv = document.createElement('div')
  body.appendChild(newDiv)
  body.lastChild.className = 'winner'

  if (gameState.winner != null) {
    body.lastChild.innerText = `${gameState.players[1].toUpperCase()} is the winner!!`
  } else {
    body.lastChild.innerText = `It's a tie!!`
  }

  deleteAllChildren(banner)
  banner.appendChild(document.createElement('button'))
  banner.firstChild.innerText = 'Play Again?'

  turnArrow.style.visibility = 'hidden'

  let playAgain = document.querySelector('button')
  playAgain.addEventListener('click', () => newGame())
}
