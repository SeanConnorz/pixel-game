export default function CharacterSelectionItem(props) {
  const { image, name, rarity, setSelectedCharacter, sprite } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Mountain" />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          <p className="text-black text-base">{name}</p>
        </span>
        <div className="px-6 pt-4 pb-2 "></div>
        <button
          onClick={() => setSelectedCharacter(sprite)}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Select
        </button>
      </div>
    </div>
  );
}
