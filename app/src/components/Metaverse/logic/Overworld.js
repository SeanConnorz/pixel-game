import { OverworldMap } from "./OverworldMap";
import { DirectionInput } from "./DirectionInput";
import { utils } from "./utils.js";
import { Person } from "./Person.js";
import { KeyPressListener } from "./KeyPressListener";

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

  bindActionInput() {
    new KeyPressListener("Enter", () => {
      // Is there a person here to talk to?
      this.map.checkForActionCutscene();
    });
  }

  bindHeroPositionCheck() {
    document.addEventListener("PersonWalkingComplete", (e) => {
      if (e.detail.whoId === "hero") {
        // Hero's position has changed
        this.map.checkForFootstepCutscene();
      }
    });
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;
    this.map.mountObjects();
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
            talking: [
              {
                events: [
                  { type: "textMessage", text: "WHY HELLO", faceHero: "npc2" },
                  { type: "textMessage", text: "Please leave." },
                ],
              },
            ],
          }),
        },
        walls: {
          // Walls for middle block
          [utils.asGridCoord(7, 6)]: true,
          [utils.asGridCoord(8, 6)]: true,
          [utils.asGridCoord(7, 7)]: true,
          [utils.asGridCoord(8, 7)]: true,
          // Walls for perimiter
          [utils.asGridCoord(0, 4)]: true,
          [utils.asGridCoord(0, 5)]: true,
          [utils.asGridCoord(0, 6)]: true,
          [utils.asGridCoord(0, 7)]: true,
          [utils.asGridCoord(0, 8)]: true,
          [utils.asGridCoord(0, 9)]: true,
          [utils.asGridCoord(1, 10)]: true,
          [utils.asGridCoord(2, 10)]: true,
          [utils.asGridCoord(3, 10)]: true,
          [utils.asGridCoord(4, 10)]: true,
          [utils.asGridCoord(6, 10)]: true,
          [utils.asGridCoord(7, 10)]: true,
          [utils.asGridCoord(8, 10)]: true,
          [utils.asGridCoord(9, 10)]: true,
          [utils.asGridCoord(10, 10)]: true,
          [utils.asGridCoord(11, 4)]: true,
          [utils.asGridCoord(11, 5)]: true,
          [utils.asGridCoord(11, 6)]: true,
          [utils.asGridCoord(11, 7)]: true,
          [utils.asGridCoord(11, 8)]: true,
          [utils.asGridCoord(11, 9)]: true,
          [utils.asGridCoord(10, 3)]: true,
          [utils.asGridCoord(9, 3)]: true,
          [utils.asGridCoord(8, 3)]: true,
          [utils.asGridCoord(8, 4)]: true,
          [utils.asGridCoord(6, 4)]: true,
          [utils.asGridCoord(5, 3)]: true,
          [utils.asGridCoord(4, 3)]: true,
          [utils.asGridCoord(3, 3)]: true,
          [utils.asGridCoord(2, 3)]: true,
          [utils.asGridCoord(1, 3)]: true,
        },
        cutsceneSpaces: {
          [utils.asGridCoord(7, 4)]: [
            {
              events: [
                { type: "textMessage", text: "You cant go in there" },
                { who: "hero", type: "walk", direction: "down" },
              ],
            },
          ],
          [utils.asGridCoord(5, 10)]: [
            {
              events: [{ type: "changeMap", map: "Kitchen" }],
            },
          ],
        },
      },
      Kitchen: {
        lowerSrc: "../../images/metaverse/maps/KitchenLower.png",
        upperSrc: "../../images/metaverse/maps/KitchenUpper.png",
        gameObjects: {
          hero: new Person({
            isPlayerControlled: true,
            x: utils.widthGrid(5),
            y: utils.widthGrid(6),
            src: this.src,
          }),
          npc1: new Person({
            x: utils.widthGrid(8),
            y: utils.widthGrid(6),
          }),
        },
      },
    };

    this.startMap(window.OverworldMaps.DemoRoom);

    this.bindActionInput();
    this.bindHeroPositionCheck();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
