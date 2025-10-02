import {RollEm} from "./dice.js";

export class PlayerChar {
      constructor() {
        this.health = 50;
        this.inventory = [];
        this.weapon = null;  // equipped weapon object { name, type, damage, multiplier, effect }
      }

       equipWeapon(weapon) {
    this.weapon = weapon;
    return `Equipped ${weapon.name}`;
  }

  addItem(name, type, quantity = 1, effect = null) {
    for (const it of this.inventory) {
      if (it.name === name) {
        it.quantity = (it.quantity || 0) + quantity;
        return;
      }
    }
    this.inventory.push({ name, type, quantity, effect });
  }

  showInventory() {
    if (this.inventory.length === 0) return "Your pockets are empty.";
    return this.inventory.map(i => `${i.name} (${i.type}) x${i.quantity || 1}`).join(", ");
  }

  attack(enemy) {
    if (!this.weapon) return "You have no weapon equipped!";
    const roll = RollEm(this.weapon.multiplier ?? 6);
    const base = this.weapon.damage ?? 1;
    const total = base + roll;

    enemy.health -= total;
    if (enemy.health < 0) enemy.health = 0;

    return `You attack the ${enemy.name} with your ${this.weapon.name}, dealing ${total} damage. Enemy health: ${enemy.health}`;
  }
}