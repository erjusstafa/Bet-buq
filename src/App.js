import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { useDispatch } from "react-redux";
import { thunkApiHome } from "./redux-toolkit/store/store";
import CasinoLive from "./components/LiveCasino/CasinoLive";
import Prematch from "./components/Prematch/Prematch";
import allConfig from "./config/allConfig";
import Promo from "./components/Promo/Promo";
import Livebeting from "./components/Live/Livebeting";
import Casino from "./components/Casino/Casino";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkApiHome());
    /*     dispatch(thunkApiHome({ prapashtes: "get_sliders" }));
     */
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path={`${allConfig["routes"]["Prematch"]["link"]}`} component={() => <Prematch />} />
{/*           <Route exact path={`${allConfig["routes"]["Live"]["link"]}`} component={() => <Livebeting />} />
 */}          <Route exact path={`${allConfig["routes"]["Casino"].link}`} component={() => <Casino />} />
      {/*     <Route exact path={`${allConfig["routes"]["LiveCasino"]["link"]}`} component={() => <CasinoLive />} />{" "} */}
          <Route exact path={`${allConfig["routes"]["Contents"].link}`} component={() => <Promo />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
