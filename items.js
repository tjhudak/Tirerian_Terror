// items.js
import { getWeapon } from "./weaponsManager.js";
import { player } from "./game.js";



export class Item {
      constructor(name, type, quantity = null, effect = null) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.effect = effect;
      }
    }

export class Weapons extends Item {
    constructor(name, type, quantity, damage, multiplier) {
        super(name, type, quantity);
        this.damage = damage;
        this.multiple = multiplier;
    }
}


export const itemActions = {
  pickup_rock: async () => {
    const rock = await getWeapon("rock");
    player.addItem(rock.name, rock.type, 1, null);
    player.equipWeapon(rock);
    document.getElementById("story").innerHTML = `You picked up a ${rock.name} and equipped it.`;
  }
};