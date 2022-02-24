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
  const selectedField = e.target;
  const col = selectedField.dataset.col - 1;
  const row = selectedField.dataset.row - 1;

  if (gameData[row][col] > 0) {
    alert('Select an empty field you Rat!');
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add('disabled');

  gameData[row][col] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
};
