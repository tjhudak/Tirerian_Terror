export class Item {
      constructor(name, type, quantity = null, effect = null) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.effect = effect;
      }
    }