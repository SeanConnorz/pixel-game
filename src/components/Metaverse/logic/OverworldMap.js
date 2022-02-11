import { utils } from "./utils.js";
import { Person } from "./Person.js";

export class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "../../images/metaverse/maps/DemoLower.png",
    upperSrc: "../../images/metaverse/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        x: utils.widthGrid(5),
        y: utils.widthGrid(6),
      }),
    },
  },
};
