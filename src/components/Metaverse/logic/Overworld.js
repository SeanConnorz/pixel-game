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

    let x = 1;
    let y = 4;
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(hero, 0, 0, 16, 16, x * 16, y * 16, 16, 16);
    };
    hero.src = "../../images/metaverse/characters/SpriteSheet.png";
  }
}
