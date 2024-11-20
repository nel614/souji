/* 基本スタイル */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #000; /* 黒背景 */
  color: white;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(135deg, #222, #555);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.8);
}

p {
  margin: 10px 0;
}

.slot-container {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.slot {
  width: 200px;
  height: 100px;
  background: linear-gradient(135deg, #444, #666);
  border: 5px solid #ffcc00;
  border-radius: 15px;
  color: #ffcc00;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  animation: spin 0.5s linear infinite;
}

button {
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(255, 87, 51, 0.8);
  transition: 0.3s;
}

button:hover {
  background-color: #c44127;
}

.hidden {
  display: none;
}

@keyframes spin {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); background: #555; }
  100% { transform: scale(1); }
}
