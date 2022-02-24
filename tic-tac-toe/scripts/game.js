const resetGame = () => {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOverEl.firstElementChild.innerHTML = `
    You won, <span id="winner-name">PLAYER NAME</span>!
  `;
  gameOverEl.style.display = 'none';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      const gameBoardItem = gameBoard.lastElementChild.children[gameBoardIndex];
      gameBoardItem.textContent = '';
      gameBoardItem.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
};

const startGame = () => {
  if (!players[0].name || !players[1].name) {
    alert('Please set custom player names for both players!');
    return;
  }

  resetGame();

  activePlayerName.textContent = players[activePlayer].name;
  gameBoard.style.display = 'block';
};

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayerName.textContent = players[activePlayer].name;
};

const checkGameOver = () => {
  // Rows Winner
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Columns Winner
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonals Winner
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[1][1];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[1][1];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
};

const endGame = (winnerID) => {
  isGameOver = true;
  gameOverEl.style.display = 'block';

  if (winnerID > 0) {
    gameOverEl.firstElementChild.firstElementChild.textContent =
      players[winnerID - 1].name;
  } else {
    gameOverEl.firstElementChild.textContent = "It's a draw!";
  }
};

const selectField = (e) => {
  if (isGameOver) {
    return;
  }

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

  const winnerID = checkGameOver();
  console.log({ winnerID, currentRound });

  if (winnerID !== 0) {
    endGame(winnerID);
  }

  currentRound++;
  switchPlayer();
};
