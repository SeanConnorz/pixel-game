import { init } from "./logic/init";
import { useState, useEffect } from "react";

export default function Metaverse() {
  useEffect(() => {
    init();
  }, []);

  return (
    <main>
      <div className="game-container flex items-center h-[100vh] scale-[3]">
        <canvas
          className="game-canvas bg-white w-[352px] h-[198px]"
          width="352"
          height="198"
        ></canvas>
      </div>
    </main>
  );
}
