import { init } from "./logic/init";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Metaverse(props) {
  const { CONTRACT_ADDRESS, currentAccount } = props;
  const [collection, setCollection] = useState([]);

  const loadCollection = () => {
    return fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${currentAccount}&asset_contract_addresses=${CONTRACT_ADDRESS}`
    )
      .then((res) => res.json())
      .then((res) => {
        res.assets.forEach((data) => {
          console.log(data);
        });
      });
  };

  useEffect(() => {
    if (currentAccount) {
      loadCollection().then(init());
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
