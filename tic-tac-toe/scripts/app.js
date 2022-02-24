const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const formEl = document.querySelector('form');
const errorMsg = document.querySelector('.error-msg');

const editPlayer1Btn = document.getElementById('edit-p-1-btn');
const editPlayer2Btn = document.getElementById('edit-p-2-btn');
const cancelBtn = document.getElementById('cancel-btn');

let playerID = 0;
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

//////////////////// EVENT LISTENERS ////////////////////
editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

formEl.addEventListener('submit', saveConfig);
