import { init } from "./logic/init";
import { useState, useEffect } from "react";
import "./styles.css";
import swal from "sweetalert";

export default function ConnectWallet(props) {
  const { selectedCharacter, currentAccount } = props;

  useEffect(() => {
    if (currentAccount) {
      init(selectedCharacter);
    }
  }, [currentAccount]);

  return (
    <section>
      <div className="game-container flex items-center h-[100vh] scale-[5]">
        <canvas
          className="game-canvas bg-white w-[352px] h-[198px]"
          width="352"
          height="198"
        ></canvas>
      </div>
    </section>
  );
}
