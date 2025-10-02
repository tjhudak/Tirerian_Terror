// enemyManager.js
import { Enemy } from "./enemies.js";

const activeEnemies = {};
let enemyData = null;

// Load JSON once
async function loadData() {
  if (!enemyData) {
    const response = await fetch("./enemies.json");
    enemyData = await response.json();
  }
  return enemyData;
}

export async function getEnemy(key) {
  const data = await loadData();

  if (!activeEnemies[key] || activeEnemies[key].health <= 0) {
    const enemy = data[key];
    activeEnemies[key] = new Enemy(
      enemy.name,
      enemy.health,
      enemy.damage,
      enemy.multiplier
    );
  }
  return activeEnemies[key];
}