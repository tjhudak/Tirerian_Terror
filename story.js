import { Scene, Choice } from "./scene.js";

export const story = {
  start: new Scene(
    `Welcome Adventurer! You have chosen to embark on a journey the likes of which no one has ever dreamed. <br>
    A trip to end to the monstrosity that has claimed itself ruler over your land, Tireria. <br><br>

    You have no friends, and no possessions to call your own except the pitiful inheritance your uncle left you. <br>
    2 gold coins.<br>
    Your home is no more than a couple of sticks holding up some dried grass to shade you from the blistering<br>
    heat of the sun in summer and the oppressive rain and hail in the winter. You gather yourself and inhale deeply. <br>
    As you exhale you take in the sight of the world around you. <br>
    To your left you see a jagged mountain far off in the distance. It looks little more than a small shard of gray <br>
    glass.<br><br>
    You have no way to go except forward toward the great unknown. In front of you lies...`,
    [
      new Choice("Go North", "field"),
      new Choice("Pickup Inheritance", null, "pickup:currency:gold:2"),
    ]
  ),

  field: new Scene(
    `A vast wide open area with dead weeds knee high. It looks bleak and lifeless. There is a snake in the weeds it looks <br>
    like its slithering toward you. You see a rock on the ground. `,
    [
      new Choice("Go Back", "start"),
      new Choice("Pick up Rock", null, "pickup:weapons:rock"),
      new Choice("Attack Snake", null, "attack_rat"),
    ]
  ),
};
