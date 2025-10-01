import { PlayerChar } from "./player.js";
import { Enemy } from "./enemies.js";
// If you don’t need Item yet, this line can be removed safely
import { Item } from "./items.js";
import { story } from "./story.js";

const player = new PlayerChar();
player.addItem("Gold", "currency", 2, null);


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

function handleAction(action) {
  switch (action) {
    case "inventory":
      document.getElementById("Inventory").innerText =
        "Inventory: " + player.showInventory();
      break;
    default:
      console.log("No handler for action:", action);
  }
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

function RollEm(number) {
  let result = "";
  let random = Math.floor(Math.random() * number) + 1;
  result = "d" + number + " = " + random;
  document.getElementById("story").innerHTML = result + "<br><br>";
}

showScene(current);
