// 掃除場所のリスト
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
  "玄関の下駄箱",
  "寝室のベッド下",
  "書斎の机"
];

let hasPlayedToday = false;

// HTML要素を取得
const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const slot = document.getElementById("slot1");
const resultContainer = document.getElementById("result-container");

// Anime.jsを使用したスロット回転アニメーション
function rollSlots() {
  if (hasPlayedToday) {
    alert("本日はすでにガチャを回しています！また明日挑戦してください！");
    return;
  }

  // スロットを回転中に設定
  slot.textContent = "回転中...";
  anime({
    targets: slot,
    rotate: [0, 360],
    scale: [1, 1.5, 1],
    duration: 2000,
    easing: "easeInOutQuad",
    complete: function () {
      // 回転後にランダムな結果を表示
      const slotResult = getRandomItem(locations);
      slot.textContent = slotResult;

      // 結果表示アニメーション
      anime({
        targets: slot,
        scale: [1, 1.2, 1],
        duration: 500,
        easing: "easeInOutQuad"
      });

      hasPlayedToday = true;
      resultText.textContent = `今日の掃除ミッション：${slotResult}`;
      resultContainer.classList.remove("hidden");
    }
  });
}

// ランダムな結果を取得
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Three.jsを使用した3D背景のセットアップ
function setup3DScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 立方体を追加
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // カメラの位置
  camera.position.z = 5;

  // アニメーション
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

// ボタンのクリックイベントにアニメーションを紐づけ
rollButton.addEventListener("click", rollSlots);

// ページ読み込み時に3Dシーンをセットアップ
setup3DScene();
