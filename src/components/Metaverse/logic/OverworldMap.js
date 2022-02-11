import { GameObject } from "./GameObject.js";

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
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
      }),
    },
  },
};
