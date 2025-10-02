import {RollEm} from "./dice.js";

export class PlayerChar {
      constructor() {
        this.health = 50;
        this.inventory = [];
        this.weapon = null;  // equipped weapon object { name, type, damage, multiplier, effect }
      }
      attack(enemy) {

        enemy.health -= weapon.damage + RollEm(weapon.multiplier)
        return "Player attacks!";
      }

      showInventory() {
        if (this.inventory.length === 0) return "Your pockets are empty.";
        const out = [];
        for (const i of this.inventory) {
        let s = `${i.name} (${i.type}) x${i.quantity}`;
        if (i.effect) s += ` [${i.effect}]`;
        out.push(s);
        }
        return out.join(", ");
    }

      addItem(name, type, quantity = 1, effect = null) {
        // stack by name
        for (const i of this.inventory) {
        if (i.name === name) {
        i.quantity += quantity;
        return;
        }
        }
        this.inventory.push({ name, type, quantity, effect });
    }

      equipWeapon(weaponObj) {
        // Expect weaponObj to have { name, type, damage, multiplier, effect }
        this.weapon = weaponObj;
        return `Equipped ${weaponObj.name}.`;
    }

      attack(enemy) {
        if (!this.weapon) return "You have no weapon equipped!";
        const roll = RollEm(this.weapon.multiplier ?? 6);
        const total = (this.weapon.damage ?? 1) + roll;

        enemy.health -= total;
        if (enemy.health < 0) enemy.health = 0;

        return `You attack the ${enemy.name} with your ${this.weapon.name}! It takes ${total} damage. Enemy health: ${enemy.health}.`;
  }


    }