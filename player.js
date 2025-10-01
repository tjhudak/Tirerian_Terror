export class PlayerChar {
      constructor() {
        this.health = 50;
        this.inventory = [];
      }
      attack() {
        return "Player attacks!";
      }

      showInventory() {
        if (this.inventory.length === 0) {
            return "Your pockets are empty.";
        }
        return this.inventory.map(i => `${i.name} (${i.type})`).join(", ");
      }

      addItem(name, type, quantity = 1, effect = null) {
        this.inventory.push({name, type, quantity, effect});
      }
    }