export class PlayerChar {
      constructor() {
        this.health = 50;
        this.inventory = [];
        this.damage = weapon.damage
      }
      attack(enemies) {

        enemy.health -= weapon.damage + RollEm(weapon.multiplier)
        return "Player attacks!";
      }

      showInventory() {
        if (this.inventory.length === 0) {
            return "Your pockets are empty.";
        }
        let list = [];
        for (let i of this.inventory) {
            let text = i.name + " (" + i.type + ") x" + i.quantity;
            if (i.effect) {
                text += " [" + i.effect + "]";
            }
            list.push(text);
        }
        return list.join(", ");
      }

      addItem(name, type, quantity = 1, effect = null) {
        this.inventory.push({name, type, quantity, effect});
      }
    }