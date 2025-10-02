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
  pickup_rock: () => { /* add rock */ },
  pickup_sword: () => { /* add sword */ }
};