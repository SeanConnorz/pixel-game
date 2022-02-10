import NftItem from "./NftItem";

export default function NFT() {
  const exotic = {
    text: "Exotic",
    class: "text-yellow-500 text-base",
  };

  const legendary = {
    text: "Legendary",
    class: "text-red-500 text-base",
  };

  const rare = {
    text: "Rare",
    class: "text-purple-500 text-base",
  };

  const uncommon = {
    text: "Uncommon",
    class: "text-blue-500 text-base",
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="mb-[5rem]">Meet the characters!</h1>
      <div className="grid grid-cols-4 gap-8">
        <NftItem
          image="../../images/knight.png"
          name="samuri"
          rarity={exotic}
        />
        <NftItem
          image="../../images/sensei.png"
          name="sensei"
          rarity={legendary}
        />
        <NftItem image="../../images/ninja.png" name="ninja" rarity={rare} />
        <NftItem
          image="../../images/swordsman.png"
          name="swordsman"
          rarity={uncommon}
        />
      </div>
    </section>
  );
}
