// /////////// DOM ELEMENTS //////////
let body = document.querySelector('body')
let board = document.querySelector('#board')
let square = document.querySelector('.box')
let allBoxes = Array.from(document.querySelectorAll('.box'))
let playAgain = document.querySelector('.play-again')
// let allX = document.querySelectorAll()

let winBanner = document.querySelector('.winner')
let bottom = document.querySelector('#bottom')
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

let score = {
  x: 0,
  o: 0,
  tie: 0
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

  bottom.removeChild(bottom.firstChild)
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
        target.style.color = '#ed9497';
      } else {
        target.style.color = '#45dcf0';

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

function newButton(parent, cssClass, text) {
  parent.appendChild(document.createElement('button'))
  parent.lastChild.className = cssClass
  parent.lastChild.innerText = text
}

function endGame() {

  if (gameState.winner === 'x') {
    score.x++
    document.querySelector('.x-score').innerHTML = score.x
  } else if (gameState.winner === 'o') {
    score.o++
    document.querySelector('.o-score').innerHTML = score.o
  } else {
    score.tie++
    document.querySelector('.tie').innerHTML = score.tie
  }


  turnArrow.style.visibility = 'hidden'

  deleteAllChildren(bottom)
  newButton(bottom, 'play-again', 'PLAY AGAIN?')
  let playAgain = document.querySelector('.play-again')
  playAgain.addEventListener('click', () => newGame())
}
