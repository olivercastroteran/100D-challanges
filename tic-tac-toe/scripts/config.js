const openPlayerConfig = (e) => {
  playerID = +e.target.dataset.playerid;
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
  formEl.firstElementChild.classList.remove('error');
  document.getElementById('playername').value = '';
  errorMsg.textContent = '';
};

const saveConfig = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const playerName = formData.get('playername').trim();

  if (!playerName) {
    e.target.firstElementChild.classList.add('error');
    errorMsg.textContent = 'Please enter a valid name';
    return;
  }

  const currentPlayer = document.getElementById(`player-${playerID}-data`);
  currentPlayer.children[1].textContent = playerName;

  players[playerID - 1].name = playerName;

  setTimeout(closeModal, 250);
};
