import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center w-full p-8">
      <div className="flex justify-around w-[50%]">
        <h1 className="cursor-pointer hover:underline decoration-pink-500 underline-offset-4">
          Home
        </h1>
        <h1 className="cursor-pointer hover:underline decoration-pink-500 underline-offset-4">
          NFT
        </h1>
        <Link
          to="/metaverse"
          href="localhost:3000/metaverse"
          className="cursor-pointer hover:underline decoration-pink-500 underline-offset-4"
        >
          Game
        </Link>
        <h1 className="cursor-pointer hover:underline decoration-pink-500 underline-offset-4">
          Roadmap
        </h1>
      </div>
    </nav>
  );
}
