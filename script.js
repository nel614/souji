let hasPlayedToday = false;
let totalPoints = 0;

// HTML要素
const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const slot = document.getElementById("slot1");
const stampsContainer = document.getElementById("stamps");
const totalPointsDisplay = document.getElementById("totalPoints");

// スタンプカードを更新
function updateStamps(points) {
  totalPoints = points;
  totalPointsDisplay.textContent = totalPoints;

  stampsContainer.innerHTML = "";
  for (let i = 0; i < points; i++) {
    const stamp = document.createElement("div");
    stamp.className = "stamp";
    stampsContainer.appendChild(stamp);
  }
}

// ガチャを回す
function rollGacha(userId) {
  if (hasPlayedToday) {
    alert("今日はもうガチャを回しています。また明日挑戦してください！");
    return;
  }

  // スロット回転演出
  slot.classList.add("spinning");
  resultText.textContent = "回転中...";

  setTimeout(() => {
    // 結果を決定
    const outcomes = [1, 3, 5, 0];
    const points = outcomes[Math.floor(Math.random() * outcomes.length)];
    slot.classList.remove("spinning");

    if (points > 0) {
      totalPoints += points;
      updateStamps(totalPoints);
      slot.textContent = `${points}ポイント！`;
      alert(`${points}ポイントを獲得しました！`);
    } else {
      slot.textContent = "外れ！";
      alert("外れ！掃除ミッションで1ポイント獲得可能！");
    }

    hasPlayedToday = true;
  }, 3000); // 3秒回転演出
}

// ボタンイベント
rollButton.addEventListener("click", () => rollGacha("user123"));
