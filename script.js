const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const statusMessage = document.querySelector('.status-message');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
  handleRound('rock');
});

paperButton.addEventListener('click', () => {
  handleRound('paper');
});

scissorsButton.addEventListener('click', () => {
  handleRound('scissors');
});

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  statusMessage.textContent = 'Make your move to begin';
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'rock';
  } else if (random === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(humanSelect, computerSelect) {
  humanSelect = humanSelect.toLowerCase();
  if (humanSelect === computerSelect) {
    statusMessage.textContent = 'あいこです。 引き分けです！';
  } else if (
    (humanSelect === 'rock' && computerSelect === 'scissors') ||
    (humanSelect === 'scissors' && computerSelect === 'paper') ||
    (humanSelect === 'paper' && computerSelect === 'rock')
  ) {
    playerScoreSpan.textContent = ++humanScore;
    statusMessage.textContent = 'あなたの勝ちです！おめでとう';
  } else if (
    (humanSelect === 'rock' && computerSelect === 'paper') ||
    (humanSelect === 'scissors' && computerSelect === 'rock') ||
    (humanSelect === 'paper' && computerSelect === 'scissors')
  ) {
    computerScoreSpan.textContent = ++computerScore;
    statusMessage.textContent = 'あなたの負けです…';
  }
  if (humanScore === 5) {
    statusMessage.textContent = 'ゲーム終了！ あなたの勝ちです！';
    setTimeout(() => {
      resetGame();
    }, 2000);
  } else if (computerScore === 5) {
    statusMessage.textContent = 'ゲーム終了！ あなたの負けです…';
    setTimeout(() => {
      resetGame();
    }, 2000);
  }
}

function handleRound(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) return;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
