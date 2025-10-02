import { getEnemy } from "./enemyManager.js";

export const combatActions = {
  attack_snake: async (player) => {
    const snake = await getEnemy("snake");

    const msg1 = player.attack(snake);
    const msg2 = snake.health > 0
      ? snake.attack(player)
      : "The snake is defeated!";

    document.getElementById("story").innerHTML = msg1 + "<br>" + msg2;
  }
};