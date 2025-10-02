import { PlayerChar } from "./player.js";
import { Enemy } from "./enemies.js";
// If you don’t need Item yet, this line can be removed safely
import { Item } from "./items.js";
import { story } from "./story.js";
import weapons from "./weapons.json" assert {type: "json"};
import enemies from "./enemies.json" assert {type: "json"};

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

      case "pickup_rock":
        const rock = weapons.rock
        player.addItem(rock.name, rock.type, 1, rock.effect);
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



showScene(current);
