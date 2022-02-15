import ConnectWallet from "./ConnectWallet";
import CharacterSelection from "./CharacterSelection";
import Game from "./Game";

import { init } from "./logic/init";
import { useState, useEffect } from "react";
import "./styles.css";
import swal from "sweetalert";

export default function Metaverse(props) {
  const { CONTRACT_ADDRESS, currentAccount } = props;
  const [collection, setCollection] = useState();

  return (
    <main>
      <CharacterSelection
        collection={collection}
        setCollection={setCollection}
        CONTRACT_ADDRESS={CONTRACT_ADDRESS}
        currentAccount={currentAccount}
      />
      {/* <Game
        collection={collection}
        setCollection={setCollection}
        CONTRACT_ADDRESS={CONTRACT_ADDRESS}
        currentAccount={currentAccount}
      /> */}
    </main>
  );
}
