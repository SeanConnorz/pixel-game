import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import NFT from "./components/NFT/Index";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Metaverse from "./components/Metaverse/Index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flex flex-col items-center text-white">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingPage />
            <NFT />
            <About />
            <Roadmap />
            <Team />
          </Route>
          <Route path="/metaverse">
            <Metaverse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
