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

  const outcomes = [1, 3, 5, 0];
  const points = outcomes[Math.floor(Math.random() * outcomes.length)];

  if (points > 0) {
    totalPoints += points;
    updateStamps(totalPoints);
    alert(`${points}ポイントを獲得！`);
  } else {
    alert("外れ！掃除ミッションで1ポイント獲得可能！");
  }

  hasPlayedToday = true;
}

// ボタンイベント
rollButton.addEventListener("click", () => rollGacha("user123"));

// Instagram認証
const clientId = "YOUR_CLIENT_ID";
const redirectUri = "YOUR_REDIRECT_URI";

function loginWithInstagram() {
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile&response_type=code`;
  window.location.href = authUrl;
}

document.getElementById("loginButton").addEventListener("click", loginWithInstagram);
