const locations = [
  "キッチン：コンロ",
  "キッチン：シンク",
  "キッチン：レンジフード",
  "キッチン：冷蔵庫内",
  "キッチン：キッチン棚",
  "リビング：窓",
  "リビング：カーテン",
  "リビング：フローリング",
  "リビング：テレビ台",
  "リビング：ソファ下",
  "バスルーム：浴槽",
  "バスルーム：シャワーヘッド",
  "バスルーム：排水溝",
  "バスルーム：鏡",
  "バスルーム：天井",
  "トイレ：便器",
  "トイレ：タンク",
  "トイレ：床",
  "トイレ：ペーパーホルダー周り",
  "トイレ：ドアノブ",
  "玄関：玄関ドア",
  "玄関：下駄箱",
  "玄関：たたき",
  "玄関：靴",
  "玄関：傘立て"
];

let hasPlayedToday = false;

const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const statusText = document.getElementById("status");

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function rollSlots() {
  if (hasPlayedToday) {
    alert("本日はすでにガチャを回しています！また明日挑戦してください！");
    return;
  }

  // ランダム結果を生成
  const slot1 = getRandomItem(locations);

  // 結果をスロットに反映
  document.getElementById("slot1").textContent = slot1;

  // 結果を表示
  resultText.innerHTML = `
    今日の掃除ミッション：<br><strong>${slot1}</strong><br>
    結果のビフォーアフターを送ってプレゼントポイントを貯めよう！
  `;
  resultText.classList.remove("hidden");

  // 1日1回制限
  hasPlayedToday = true;
  statusText.textContent = "本日は挑戦済み";
}

rollButton.addEventListener("click", rollSlots);
