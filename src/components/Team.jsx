export default function Team() {
  return (
    <section className="flex flex-col items-center mt-[20rem] mb-[5rem]">
      <h1 className="text-[3rem] mb-[8rem]">Meet the Team... or person</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="../../images/MaskedMan.png"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            <p className="text-black text-base">Qyrcs</p>
          </span>
          <div className="px-6 pt-4 pb-2 ">
            <p className="{rarity.class}">Did everything</p>
          </div>
        </div>
      </div>
    </section>
  );
}
