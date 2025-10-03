import { PlayerChar } from "./player.js";
import { Enemy, spawnEnemy } from "./enemies.js";
import { story } from "./story.js";
import { combatActions } from "./combat.js";
import { itemActions } from "./items.js";



export const player = new PlayerChar();

updateStats(player);



let showing = false;
document.getElementById("inventoryBTN").onclick = () => {
   if (showing == false) {
  document.getElementById("Inventory").innerText =
    "Inventory: " + player.showInventory();
    showing = true;
  }
  else {
    document.getElementById("Inventory").innerText = "";
    showing = false;
  }
};

let current = "start";

async function handleAction(action) {
  if (combatActions[action]) {
    await combatActions[action](player);
  } 
  else if (action.startsWith("pickup:")) {
    const parts = action.split(":"); // ["pickup", "currency", "gold", "2"]
    const category = parts[1];
    const key = parts[2];
    const amount = parts[3] ? parseInt(parts[3], 10) : 1;
    await itemActions.pickup(category, key, amount);
  }
  else if (action.startsWith("spawn:")) {
    const parts = action.split(":");
    const category = parts[1];
    const key = parts[2];

    currentEnemy = await spawnEnemy.spawn(category, key);

     document.getElementById("story").innerHTML =
      `A wild ${currentEnemy.name} appears!<br>Health: ${currentEnemy.health}`;

  }
  else {
    console.warn("Unknown action:", action);
  }
  // always refresh HUD after action
  updateStats(player);
}

function showScene(sceneKey) {
  const scene = story[sceneKey];
  document.getElementById("story").innerHTML = scene.text;
  console.log("Scene loaded:", sceneKey, scene);

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  scene.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      if (choice.action) handleAction(choice.action);
      if (choice.next) showScene(choice.next);
    };
    choicesDiv.appendChild(btn);
  });
}

function updateStats(player) {
  const statsDiv = document.getElementById("stats");
  if (!statsDiv) return;

  statsDiv.innerHTML = `
    <strong>Player</strong><br>
    HP: ${player.health}<br>
    Weapon: ${player.weapon ? player.weapon.name : "None"}<br>
    Gold: ${player.gold || 0}
  `;
}



showScene(current);
