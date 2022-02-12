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
      // Draw lower layer
      this.map.drawLowerImage(this.ctx);

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
        });
        object.sprite.draw(this.ctx);
      });

      // Draw upper layer
      this.map.drawUpperImage(this.ctx);
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
        },
      },
    };

    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
