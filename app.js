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

const winningMoves = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: []
}

let handler = function (e) {
  playerMove(e)
}

function computerMove() {
  // debugger;

  let count = 0
  for (let key = 0; key <= 7; key++) {
    console.log(winningMoves[key].toString().toString())
    if (winningMoves[key].toString().match(/-oo/)) {
      if (key === 0) {
        document.querySelector('.s00').innerText = 'o'
        document.querySelector('.s00').style.color = '#45dcf0'
        gameState.board[0][0] = 'o'
      }
      if (key === 1) {
        document.querySelector('.s10').innerText = 'o'
        document.querySelector('.s10').style.color = '#45dcf0'
        gameState.board[1][0] = 'o'
      }
      if (key === 2) {
        document.querySelector('.s20').innerText = 'o'
        document.querySelector('.s20').style.color = '#45dcf0'
        gameState.board[2][0] = 'o'
      }
      if (key === 3) {
        document.querySelector('.s00').innerText = 'o'
        document.querySelector('.s00').style.color = '#45dcf0'
        gameState.board[0][0] = 'o'
      }
      if (key === 4) {
        document.querySelector('.s01').innerText = 'o'
        document.querySelector('.s01').style.color = '#45dcf0'
        gameState.board[0][1] = 'o'
      }
      if (key === 5) {
        document.querySelector('.s02').innerText = 'o'
        document.querySelector('.s02').style.color = '#45dcf0'
        gameState.board[0][2] = 'o'
      }
      if (key === 6) {
        document.querySelector('.s00').innerText = 'o'
        document.querySelector('.s00').style.color = '#45dcf0'
        gameState.board[0][0] = 'o'
      }
      if (key === 7) {
        document.querySelector('.s02').innerText = 'o'
        document.querySelector('.s02').style.color = '#45dcf0'
        gameState.board[0][2] = 'o'
      }
      count++
    }

    if (winningMoves[key].toString().match(/o-o/)) {
      if (key === 0) {
        document.querySelector('.s01').innerText = 'o'
        document.querySelector('.s01').style.color = '#45dcf0'
        gameState.board[0][1] = 'o'
      }
      if (key === 1) {
        document.querySelector('.s11').innerText = 'o'
        document.querySelector('.s11').style.color = '#45dcf0'
        gameState.board[1][1] = 'o'
      }
      if (key === 2) {
        document.querySelector('.s21').innerText = 'o'
        document.querySelector('.s21').style.color = '#45dcf0'
        gameState.board[2][1] = 'o'
      }
      if (key === 3) {
        document.querySelector('.s10').innerText = 'o'
        document.querySelector('.s10').style.color = '#45dcf0'
        gameState.board[1][0] = 'o'
      }
      if (key === 4) {
        document.querySelector('.s11').innerText = 'o'
        document.querySelector('.s11').style.color = '#45dcf0'
        gameState.board[1][1] = 'o'
      }
      if (key === 5) {
        document.querySelector('.s12').innerText = 'o'
        document.querySelector('.s12').style.color = '#45dcf0'
        gameState.board[1][2] = 'o'
      }
      if (key === 6) {
        document.querySelector('.s11').innerText = 'o'
        document.querySelector('.s11').style.color = '#45dcf0'
        gameState.board[1][1] = 'o'
      }
      if (key === 7) {
        document.querySelector('.s11').innerText = 'o'
        document.querySelector('.s11').style.color = '#45dcf0'
        gameState.board[1][1] = 'o'
      }
      count++
    }

    if (winningMoves[key].toString().match(/oo-/)) {
      if (key === 0) {
        document.querySelector('.s02').innerText = 'o'
        document.querySelector('.s02').style.color = '#45dcf0'
        gameState.board[0][2] = 'o'
      }
      if (key === 1) {
        document.querySelector('.s12').innerText = 'o'
        document.querySelector('.s12').style.color = '#45dcf0'
        gameState.board[1][2] = 'o'
      }
      if (key === 2) {
        document.querySelector('.s22').innerText = 'o'
        document.querySelector('.s22').style.color = '#45dcf0'
        gameState.board[2][2] = 'o'
      }
      if (key === 3) {
        document.querySelector('.s20').innerText = 'o'
        document.querySelector('.s20').style.color = '#45dcf0'
        gameState.board[2][0] = 'o'
      }
      if (key === 4) {
        document.querySelector('.s21').innerText = 'o'
        document.querySelector('.s21').style.color = '#45dcf0'
        gameState.board[2][1] = 'o'
      }
      if (key === 5) {
        document.querySelector('.s22').innerText = 'o'
        document.querySelector('.s22').style.color = '#45dcf0'
        gameState.board[2][2] = 'o'
      }
      if (key === 6) {
        document.querySelector('.s20').innerText = 'o'
        document.querySelector('.s20').style.color = '#45dcf0'
        gameState.board[2][0] = 'o'
      }
      if (key === 7) {
        document.querySelector('.s22').innerText = 'o'
        document.querySelector('.s22').style.color = '#45dcf0'
        gameState.board[2][2] = 'o'
      }
      count++
    }

  }


  while (count === 0) {
    let x = Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3)
    let move = gameState.board[x][y];
    if (move === '-') {
      document.querySelector(`.s${x}${y}`).innerText = 'o'
      document.querySelector(`.s${x}${y}`).style.color = '#45dcf0'
      gameState.board[x][y] = 'o'
      count++
    }
  }

  if (checkWinner() === true) {
    gameState.winner = gameState.players[0]
  }
  if (gameState.winner != null) {
    endGame()
  }
  if (gameState.counter >= 9) {
    endGame()
  }
  switchPlayers();
  board.addEventListener('click', handler)
}


let gameState = {
  players: ['x', 'o'],
  board: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ],
  counter: 0,
  winner: null,
  computerPlayer: true
}

let score = {
  x: 0,
  o: 0,
  tie: 0,
  scoreSum() {
    return this.x + this.o + this.tie
  }
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
  if (score.scoreSum() % 2 === 1) { gameState.players.reverse() }
  if (score.scoreSum() % 2 === 1) { turnArrow.style.justifyContent = 'flex-end' } else { turnArrow.style.justifyContent = 'flex-start' }
  turnArrow.style.visibility = 'visible'
  if (gameState.computerPlayer = true && gameState.players[0] === 'o') {
    setTimeout(function () {
      computerMove();
    }, 1000);
  }
}

function switchPlayers() {
  gameState.players.reverse();
}




function playerMove(event) {


  let target = event.target
  let updateBoard = () => {
    let x = target.className.split(' ')[1].split('')[1]
    let y = target.className.split(' ')[1].split('')[2]
    gameState.board[x][y] = gameState.players[0]
  }


  if (gameState.winner === null) {
    // debugger;
    //CPU move if single player//

    //Update the gameboard with X or O//
    if (target.className.split(' ')[0] === 'box' && target.innerText === '') {
      board.removeEventListener('click', handler)
      target.innerText = gameState.players[0].toUpperCase()
      if (gameState.players[0] === 'x') {
        target.style.color = '#ed9497';
      } else {
        target.style.color = '#45dcf0';
      }

      //Update gameState & turn arrow//
      if (gameState.players[0] === 'x') {
        turnArrow.style.justifyContent = 'flex-end'
      } else {
        turnArrow.style.justifyContent = 'flex-start'
      }
      updateBoard();
      gameState.counter++

      //Check if there's a winner//
      if (checkWinner() === true) {
        gameState.winner = gameState.players[0]
      }
      if (gameState.winner != null) {
        endGame()
      }
      if (gameState.counter >= 9) {
        endGame()
      }
    }
  }

  //Switch current player & remove event listener//
  switchPlayers();

  // console.dir(target);


  if (gameState.computerPlayer = true && gameState.players[0] === 'o' && gameState.winner === null) {
    setTimeout(function () {
      computerMove();
    }, 1000);
  }
  console.dir(target)
  // console.dir(winningMoves)
  // console.dir(checkHorizontal())
  // console.dir(checkVertical())

}

board.addEventListener('click', handler)

let regexMatch = (input) => {
  return (input.match(/xxx|ooo/) ? true : false)
}

function checkHorizontal() {
  let horizontal = []
  for (let i in gameState.board) {
    horizontal.push(gameState.board[i].join(''))
    winningMoves[i] = horizontal[i]
  }
  return regexMatch(horizontal.join(' '))
}

function checkVertical() {
  let vertical = []
  let count = 0
  for (let j = 0; j <= gameState.board.length - 1; j++) {
    let string = ''
    for (let i = 0; i <= gameState.board.length - 1; i++) {
      string += gameState.board[i][j]
    }
    vertical.push(string)
  }
  winningMoves[count + 3] = vertical[count]
  winningMoves[count + 4] = vertical[count + 1]
  winningMoves[count + 5] = vertical[count + 2]
  count++
  return regexMatch(vertical.join(' '))
}

function checkDiagonal() {
  let diagonal = []
  let count = 0
  let j = 2
  for (let i = 0; i <= gameState.board.length - 1; i++) {
    diagonal += gameState.board[i][j]
    j--;
  }
  diagonal += ' '
  for (let i = 0; i <= gameState.board.length - 1; i++) {
    diagonal += gameState.board[i][i];
  }
  winningMoves[6] = diagonal.split(' ')[0]
  winningMoves[7] = diagonal.split(' ')[1]
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
