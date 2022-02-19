export default function NftItem(props) {
  const { image, name, rarity } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Mountain" />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          <p className="text-black text-base">{name}</p>
        </span>
        <div className="px-6 pt-4 pb-2 ">
          <p className={rarity.class}>{rarity.text}</p>
        </div>
      </div>
    </div>
  );
}
