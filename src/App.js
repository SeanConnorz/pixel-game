import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import NFT from "./components/NFT/Index";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Metaverse from "./components/Metaverse/Index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import PreviousMap from "postcss/lib/previous-map";

const CONTRACT_ADDRESS = "0xb33A8d97527FA5E552b2BC8886088D2Fbb8BFEf7";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please connect wallet");
      return;
    } else {
      console.log("Account Connected");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Router>
      <div className="App flex flex-col items-center text-white">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingPage
              CONTRACT_ADDRESS={CONTRACT_ADDRESS}
              account={{ currentAccount, setCurrentAccount }}
            />
            <NFT />
            <About />
            <Roadmap />
            <Team />
          </Route>
          <Route path="/metaverse">
            <Metaverse
              currentAccount={currentAccount}
              CONTRACT_ADDRESS={CONTRACT_ADDRESS}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
