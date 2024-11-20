// ガチャアイテムのリスト
const items = [
  { name: "ノーマルアイテム", rarity: "normal" },
  { name: "レアアイテム", rarity: "rare" },
  { name: "スーパーレアアイテム", rarity: "super_rare" },
];

let hasPlayedToday = false;

// HTML要素を取得
const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const slot = document.getElementById("slot1");
const resultContainer = document.getElementById("result-container");

// ガチャロジック
function rollGacha() {
  if (hasPlayedToday) {
    alert("今日はもうガチャを回しています。また明日挑戦してください！");
    return;
  }

  slot.textContent = "回転中...";
  anime({
    targets: slot,
    rotate: [0, 360],
    duration: 2000,
    easing: "easeInOutQuad",
    complete: function () {
      const result = getRandomItem(items);
      slot.textContent = result.name;

      // レアリティに応じた演出
      let color = "#fff";
      if (result.rarity === "rare") color = "#00f";
      else if (result.rarity === "super_rare") color = "#f00";

      anime({
        targets: "body",
        backgroundColor: [color, "#000"],
        duration: 800,
        easing: "easeInOutQuad",
      });

      resultText.textContent = `結果: ${result.name} (${result.rarity})`;
      resultContainer.classList.remove("hidden");
      hasPlayedToday = true;
    },
  });
}

// ランダムなアイテムを取得
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ボタンイベント
rollButton.addEventListener("click", rollGacha);
