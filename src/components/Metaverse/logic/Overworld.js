import { OverworldMap } from "./OverworldMap";
import { DirectionInput } from "./DirectionInput";
import { utils } from "./utils.js";
import { Person } from "./Person.js";

export class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
    this.src = config.src;
  }

  startGameLoop() {
    const step = () => {
      // Clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Establish the camera person
      const cameraPerson = this.map.gameObjects.hero;

      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
      });

      // Draw lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.draw(this.ctx, cameraPerson);
      });

      // Draw upper layer
      this.map.drawUpperImage(this.ctx, cameraPerson);
      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  // initalizes game
  init() {
    window.OverworldMaps = {
      DemoRoom: {
        lowerSrc: "../../images/metaverse/maps/DemoLower.png",
        upperSrc: "../../images/metaverse/maps/DemoUpper.png",
        gameObjects: {
          hero: new Person({
            isPlayerControlled: true,
            x: utils.widthGrid(5),
            y: utils.widthGrid(6),
            src: this.src,
          }),
          npc1: new Person({
            x: utils.widthGrid(2),
            y: utils.widthGrid(6),
            behaviorLoop: [
              { type: "walk", direction: "left" },
              { type: "stand", direction: "up", time: 600 },
              { type: "walk", direction: "up", time: 600 },
              { type: "walk", direction: "right" },
              { type: "walk", direction: "down" },
            ],
          }),
          npc2: new Person({
            x: utils.widthGrid(8),
            y: utils.widthGrid(9),
            behaviorLoop: [
              { type: "stand", direction: "left", time: 1200 },
              { type: "stand", direction: "up", time: 800 },
              { type: "stand", direction: "right", time: 500 },
              { type: "stand", direction: "down", time: 2000 },
            ],
          }),
        },
        walls: {
          // "16, 16": true,
          [utils.asGridCoord(7, 6)]: true,
          [utils.asGridCoord(8, 6)]: true,
          [utils.asGridCoord(7, 7)]: true,
          [utils.asGridCoord(8, 7)]: true,
        },
      },
    };

    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
    this.map.mountObjects();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();

    this.map.startCutscene([{ type: "textMessage", text: "WHY HELO" }]);
  }
}
