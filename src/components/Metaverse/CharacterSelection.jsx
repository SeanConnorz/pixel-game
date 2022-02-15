import CharacterSelectionItem from "./CharacterSelectionItem";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function CharacterSelection(props) {
  const [collectionDisplay, setCollectionDisplay] = useState([]);
  const { collection, setCollection, currentAccount, CONTRACT_ADDRESS } = props;

  const loadCollection = () => {
    return fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${currentAccount}&asset_contract_addresses=${CONTRACT_ADDRESS}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.assets.length === 0) {
          swal("Please connect a metamask wallet with a valid token");
          return;
        }
        const arr = [];
        res.assets.forEach((data) => {
          arr.push(data.image_url);
          console.log(data);
          setCollectionDisplay((prev) => [
            ...prev,
            <CharacterSelectionItem
              image={data.animation_url}
              name={data.name}
            />,
          ]);
        });
        return arr;
      });
  };

  useEffect(() => {
    if (currentAccount) {
      loadCollection();
    }
  }, [currentAccount]);

  return (
    <section>
      <h1>Chose your character</h1>
      {collectionDisplay}
    </section>
  );
}
