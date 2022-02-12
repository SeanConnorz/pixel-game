import { Overworld } from "./Overworld";

export const init = (spriteSheet) => {
  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
    src: spriteSheet,
  });

  overworld.init();

  return overworld;
};
