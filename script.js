//Step 1: プロジェクト構成を作る（Setup the project structure)

// Step 2
// コンピュータの手をランダムに決める（getComputerChoice）

// -getComputerChoice()関数 ランダムに return(rock, paper, scissors)
// Math.random 0以上1未満のランダムな数」を1つ返す
// random に Math.random() の結果を入れる
// もし random が 0以上 かつ 1/3未満 なら "rock" を return
// もし random が 1/3以上 かつ 2/3未満 なら "paper" を return
// それ以外（2/3以上〜1未満）なら "scissors" を return

let humanScore = 0;
let computerScore = 0;

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

// Step 3: 人間の手を入力してもらう（getHumanChoice）
// getHumanChoice という名前の新しい関数を作る
// ユーザーの入力に応じて 有効な手を return する("rock", "paper", "scissors")

function getHumanChoice() {
  let humanChoice = prompt('rock, paper or scissors');
  return humanChoice;
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// Step 4: プレイヤーのスコア変数を用意する
// グローバルスコープ（ファイルの一番外側）に、次の 2 つの変数を作る
// humanScore
// computerScore

// Step 5: 1ラウンド分のじゃんけん処理を書く（playRound）
// playRound 関数
//2 つのパラメータ humanSelect computerSelect
//humanChoice を 大文字・小文字に関係なく扱えるようにする
//playRound の中で、勝敗に応じて結果を console.log する
//ラウンドの勝者に応じて、humanScore か computerScore のどちらかを +1 する

function playRound(humanSelect, computerSelect) {
  humanSelect = humanSelect.toLowerCase();
  if (humanSelect === 'rock' && computerSelect === 'rock') {
    return 'あいこです。 引き分けです！';
  } else if (humanSelect === 'paper' && computerSelect === 'paper') {
    return 'あいこです。 引き分けです！';
  } else if (humanSelect === 'scissors' && computerSelect === 'scissors') {
    return 'あいこです。 引き分けです！';
  } else if (humanSelect === 'rock' && computerSelect === 'scissors') {
    return 'あなたの勝ちです！おめでとう！';
  } else if (humanSelect === 'scissors' && computerSelect === 'paper') {
    return 'あなたの勝ちです！おめでとう！';
  } else if (humanSelect === 'paper' && computerSelect === 'rock') {
    return 'あなたの勝ちです！おめでとう！';
  } else if (humanSelect === 'rock' && computerSelect === 'paper') {
    return 'あなたの負けです…';
  } else if (humanSelect === 'scissors' && computerSelect === 'rock') {
    return 'あなたの負けです…';
  } else if (humanSelect === 'paper' && computerSelect === 'scissors') {
    return 'あなたの負けです…';
  }
}
