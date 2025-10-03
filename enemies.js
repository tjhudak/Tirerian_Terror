
import {RollEm} from "./dice.js";
import { loadEnemy } from "./enemyManager.js";


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
    
export const spawnEnemy = {
    spawn: async (category, key) => {
        const enemy = await loadEnemy(category, key);

        const monster = new Enemy(enemy.name, enemy.health, enemy.damage, enemy.multiplier);
        return monster;
    }

};