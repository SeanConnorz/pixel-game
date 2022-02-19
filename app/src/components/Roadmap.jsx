import "../styles/Roadmap.css";

export default function Roadmap() {
  return (
    <section className="flex flex-col items-center w-[80%]">
      <h1 className="relative text-[2rem] mb-[2rem]">Roadmap</h1>
      <div className="televesion flex justify-center items-center bg-[url('../public/images/TV.png')] bg-center bg-no-repeat bg-contain w-full text-center">
        <div>
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
