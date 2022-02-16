import ConnectWallet from "./ConnectWallet";
import CharacterSelection from "./CharacterSelection";
import Game from "./Game";

import { useState } from "react";
import "./styles.css";

export default function Metaverse(props) {
  const { CONTRACT_ADDRESS, currentAccount, connectWallet } = props;
  const [collection, setCollection] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();

  const renderComponent = () => {
    if (!currentAccount && !selectedCharacter) {
      return <ConnectWallet connectWallet={connectWallet} />;
    } else if (!selectedCharacter) {
      return (
        <CharacterSelection
          setSelectedCharacter={setSelectedCharacter}
          collection={collection}
          setCollection={setCollection}
          CONTRACT_ADDRESS={CONTRACT_ADDRESS}
          currentAccount={currentAccount}
        />
      );
    }
  };

  return (
    <main>
      {renderComponent()}

      {selectedCharacter && (
        <Game
          selectedCharacter={selectedCharacter}
          collection={collection}
          currentAccount={currentAccount}
        />
      )}
    </main>
  );
}
