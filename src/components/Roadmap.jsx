import "../styles/Roadmap.css";

export default function Roadmap() {
  return (
    <section className="w-[80%]">
      <div className="flex justify-center items-center bg-[url('../public/images/TV.png')] bg-center bg-no-repeat bg-contain w-full h-[50rem] text-center">
        <div>
          <h1 className="relative bottom-[15vh] text-[2rem]">Roadmap</h1>
          <ul className="grid grid-cols-1 gap-4">
            <li>NFT release</li>
            <li>Game Creation</li>
            <li>Tokenomics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
