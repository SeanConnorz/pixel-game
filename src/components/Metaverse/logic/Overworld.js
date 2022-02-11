import { GameObject } from "./GameObject";
import { OverworldMap } from "./OverworldMap";

export class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      // Draw lower layer
      this.map.drawLowerImage(this.ctx);

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((object) => {
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

  init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
    this.startGameLoop();
  }
}
