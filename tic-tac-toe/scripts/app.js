const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const formEl = document.querySelector('form');
const errorMsg = document.querySelector('.error-msg');

const editPlayer1Btn = document.getElementById('edit-p-1-btn');
const editPlayer2Btn = document.getElementById('edit-p-2-btn');
const cancelBtn = document.getElementById('cancel-btn');

const activePlayerName = document.getElementById('active-player-name');
const startBtn = document.getElementById('start-btn');
const gameBoard = document.querySelector('.game');
const boardBlocks = document.querySelectorAll('.game-board li');

let playerID = 0;
let activePlayer = 0;
const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//////////////////// EVENT LISTENERS ////////////////////
editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

formEl.addEventListener('submit', saveConfig);

startBtn.addEventListener('click', startGame);

boardBlocks.forEach((block) => {
  block.addEventListener('click', selectField);
});
