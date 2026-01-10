//Step 1: プロジェクト構成を作る（Setup the project structure)

// Step 2
// コンピュータの手をランダムに決める（getComputerChoice）

// -getComputerChoice()関数 ランダムに return(rock, paper, scissors)
// Math.random 0以上1未満のランダムな数」を1つ返す
// random に Math.random() の結果を入れる
// もし random が 0以上 かつ 1/3未満 なら "rock" を return
// もし random が 1/3以上 かつ 2/3未満 なら "paper" を return
// それ以外（2/3以上〜1未満）なら "scissors" を return

function getComputerChoice() {
  let random = Math.random();
  if (0 <= random && random < 1 / 3) {
    return 'rock';
  } else if (1 / 3 <= random && random < 2 / 3) {
    return 'paper';
  } else if (2 / 3 <= random && random < 1) {
    return 'scissors';
  }
}
