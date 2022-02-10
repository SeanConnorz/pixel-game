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
          <button
            type="button"
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mt-[2rem] rounded-lg "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
