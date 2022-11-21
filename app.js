// /////////// DOM ELEMENTS //////////
let board = document.querySelector('#board')
let square = document.querySelector('.box')


const gameState = {
  players: ['x', 'o'],
  board: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ],
  counter: 0
}

const winMethods = {
  checkHorizontal() {
    let horizontal = []
    for (let i in gameState.board) {
      horizontal.push(gameState.board[i].join(''))
    }
    return regexMatch(horizontal.join(' '))
  },

  checkVertical() {
    let vertical = []
    for (let j = 0; j <= gameState.board.length - 1; j++) {
      let string = ''
      for (let i = 0; i <= gameState.board.length - 1; i++) {
        string += gameState.board[i][j]
      }
      vertical.push(string)
    }
    return regexMatch(vertical.join(' '))
  },

  checkDiagonal() {
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
}

function newGame() {
  gameState = {
    players: ['x', 'o'],
    board: [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ],
    counter: 0
  }
}

function switchPlayers() {
  gameState.players.reverse();
}

function makeMove(event) {
  let target = event.target
  let updateBoard = () => {
    let x = target.className.split(' ')[1].split('')[0]
    let y = target.className.split(' ')[1].split('')[1]
    gameState.board[x][y] = gameState.players[0]
  }
  if (target.className.match(/box/) && target.innerText === '-') {
    target.innerText = gameState.players[0]
    updateBoard();
    counter++
    if (counter >= gameState.board[0].length + 2) {
      if (winMethods.some(() => true)) {
        gameState.winner = gameState.players[0]
      }
    }
  }
  // if (!gameState.winner){
  //   endGame()
  // }
  gameState.switchPlayers();
  console.dir(event.target);
}

board.addEventListener('click', (event) => makeMove(event))

let regexMatch = (input) => {
  return input.match(/xxx|ooo/)
}


console.log(checkDiagonal())