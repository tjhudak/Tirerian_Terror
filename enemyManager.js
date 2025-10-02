// enemyManager.js
import { Enemy } from "./enemies.js";
import enemyData from "./enemies.json" assert { type: "json" };

const activeEnemies = {};

export function getEnemy(key) {
  if (!activeEnemies[key] || activeEnemies[key].health <= 0) {
    const data = enemyData[key];
    activeEnemies[key] = new Enemy(
      data.name,
      data.health,
      data.damage,
      data.multiplier
    );
  }
  return activeEnemies[key];
}