import { init } from "./logic/init";
import { useState, useEffect } from "react";
import "./styles.css";
import swal from "sweetalert";
import { currentCharacter } from "./logic/OverworldMap";

export default function Metaverse(props) {
  const { CONTRACT_ADDRESS, currentAccount } = props;
  const [collection, setCollection] = useState();

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
        });
        init(arr[0]);
        return arr;
      });
  };

  useEffect(() => {
    if (currentAccount) {
      loadCollection().then((res) => setCollection(res));
    }
  }, [currentAccount]);

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
