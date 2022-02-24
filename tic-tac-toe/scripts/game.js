const startGame = () => {
  if (!players[0].name || !players[1].name) {
    alert('Please set custom player names for both players!');
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameBoard.style.display = 'block';
};

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayerName.textContent = players[activePlayer].name;
};

const selectField = (e) => {
  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');
  switchPlayer();
};
