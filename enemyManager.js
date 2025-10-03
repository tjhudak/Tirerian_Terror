// enemyManager.js
import { Enemy } from "./enemies.js";


let enemyData = null;

// Load JSON once
async function loadEnemy() {
  if (!enemyData) {
    const response = await fetch("./enemies.json");
    enemyData = await response.json();
  }
  return enemyData;
}

export async function getEnemy(category, key) {
  const data = await loadEnemy();

  if (!data[category] || !data[category][key]) {
    throw new Error (`Enemy not found: ${category}.${key}`);
  }
  return data[category][key];
}