const locations = [
  "キッチンのコンロ",
  "キッチンのシンク",
  "リビングの窓",
  "リビングのカーテン",
  "バスルームの浴槽",
  "バスルームの鏡",
  "トイレの便器",
  "トイレの床",
  "玄関のドア",
  "玄関の下駄箱"
];

let hasPlayedToday = false;

const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const statusText = document.getElementById("status");
const resultContainer = document.getElementById("result-container");
const slot = document.getElementById("slot1");

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function rollSlots() {
  if (hasPlayedToday) {
    alert("本日はすでにガチャを回しています！また明日挑戦してください！");
    return;
  }

  // スロットの仮アニメーション
  slot.textContent = "回転中...";
  setTimeout(() => {
    const slotResult = getRandomItem(locations);
    slot.textContent = slotResult;

    // 結果表示とエフェクト
    resultText.textContent = `今日の掃除ミッション：${slotResult}`;
    resultContainer.classList.remove("hidden");
    hasPlayedToday = true;
    statusText.textContent = "本日は挑戦済み";
  }, 2000);
}

rollButton.addEventListener("click", rollSlots);
