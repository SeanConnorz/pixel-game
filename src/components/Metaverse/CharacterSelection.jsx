import CharacterSelectionItem from "./CharacterSelectionItem";

import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function CharacterSelection(props) {
  const [collectionDisplay, setCollectionDisplay] = useState([]);
  const {
    setSelectedCharacter,
    collection,
    setCollection,
    currentAccount,
    CONTRACT_ADDRESS,
  } = props;

  const loadCollection = () => {
    return fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${currentAccount}&asset_contract_addresses=${CONTRACT_ADDRESS}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.assets.length === 0) {
          return;
        }
        const arr = [];
        res.assets.forEach((data) => {
          arr.push(data.image_url);
          setCollectionDisplay((prev) => [
            ...prev,
            <CharacterSelectionItem
              setSelectedCharacter={setSelectedCharacter}
              image={data.animation_url}
              sprite={data.image_url}
              name={data.name}
            />,
          ]);
        });
        return arr;
      });
  };

  useEffect(() => {
    if (currentAccount) {
      loadCollection().then((res) => setCollection(res));
    }
  }, [currentAccount]);

  return (
    <section className="flex flex-col items-center justify-center h-[100vh]">
      {collectionDisplay.length > 0 ? (
        <h1>Chose your character</h1>
      ) : (
        <h1>Please Connect a Wallet With a Valid Token</h1>
      )}
      <div className="flex ">{collectionDisplay}</div>
    </section>
  );
}
