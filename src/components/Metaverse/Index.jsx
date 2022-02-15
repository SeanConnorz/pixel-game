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
  const [selectedCharacter, setSelectedCharacter] = useState();

  console.log(selectedCharacter);

  return (
    <main>
      {!selectedCharacter && (
        <CharacterSelection
          setSelectedCharacter={setSelectedCharacter}
          collection={collection}
          setCollection={setCollection}
          CONTRACT_ADDRESS={CONTRACT_ADDRESS}
          currentAccount={currentAccount}
        />
      )}

      {selectedCharacter && (
        <Game
          selectedCharacter={selectedCharacter}
          collection={collection}
          setCollection={setCollection}
          CONTRACT_ADDRESS={CONTRACT_ADDRESS}
          currentAccount={currentAccount}
        />
      )}
    </main>
  );
}
