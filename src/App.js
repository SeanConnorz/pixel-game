import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import NFT from "./components/NFT/Index";
import About from "./components/About";

function App() {
  return (
    <div className="App flex flex-col items-center text-white">
      <Navbar />
      <LandingPage />
      <NFT />
      <About />
    </div>
  );
}

export default App;
