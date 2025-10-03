// items.js
import { getWeapon } from "./weaponsManager.js";
import { getItem } from "./itemsManager.js";
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
  pickup: async (category, key, amount = 1) => {
    const item = await getItem(category, key);

    player.addItem(item.name, item.type, amount, item.effect);

    if (item.type === "weapon") {
        player.equipWeapon(item);
    }
    document.getElementById("story").innerHTML =
      `You picked up ${amount} ${item.name}${amount > 1 ? "s" : ""}.`;
  }
};