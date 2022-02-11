import { GameObject } from "./GameObject";

export class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    console.log("Working", this);

    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "../../images/metaverse/maps/DemoLower.png";

    const hero = new GameObject({
      x: 5,
      y: 6,
    });

    const npc1 = new GameObject({
      x: 7,
      y: 6,
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 200);
  }
}
