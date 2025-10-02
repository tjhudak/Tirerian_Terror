
import {RollEm} from "./dice.js";


export class Enemy {
      constructor(name, health = 15, damage = 3, multiplier = 4) {
        this.name = name;
        this.health = health;
        this.damage = damage;   //base damage
        this.multiplier = multiplier;   //added dice roll for additional damage and randomness
        
      }
    

      attack(player) {
        const roll = RollEm(this.multiplier);
        const total = this.damage + roll;
        
        player.health -= total;
        if (player.health < 0) player.health= 0;

    return `${this.name} attacks! You take ${total} damage.`;
    }

}
    