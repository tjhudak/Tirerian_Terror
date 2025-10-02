import { PlayerChar } from "./player.js";
import { Enemy } from "./enemies.js";
import { story } from "./story.js";
import { combatActions } from "./combat.js";
import { itemActions } from "./items.js";



export const player = new PlayerChar();
player.addItem("Gold", "currency", 2, null);
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
  } else if (itemActions[action]) {
    await itemActions[action](player);
  } else {
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
