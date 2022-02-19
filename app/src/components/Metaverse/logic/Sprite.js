import { utils } from "./utils";

export class Sprite {
  constructor(config) {
    //Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "../../images/metaverse/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    // Configuring Animation
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-up": [[1, 0]],
      "idle-left": [[2, 0]],
      "idle-right": [[3, 0]],
      "walk-down": [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 0],
      ],
      "walk-up": [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 0],
      ],
      "walk-left": [
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 0],
      ],
      "walk-right": [
        [3, 1],
        [3, 2],
        [3, 3],
        [3, 0],
      ],
    };

    this.currentAnimation = "idle-down";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = config.animationFrameLimit;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    // Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    // Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x + utils.widthGrid(10.5) - cameraPerson.x;
    const y = this.gameObject.y + utils.widthGrid(6) - cameraPerson.y - 4;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x - 8, y - 13);

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 16, frameY * 16, 16, 16, x, y, 16, 16);

    this.updateAnimationProgress();
  }
}
