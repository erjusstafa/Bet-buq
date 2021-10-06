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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkApiHome());
    /*     dispatch(thunkApiHome("get_sliders"));
     */
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path={`${allConfig["routes"]["LiveCasino"]["link"]}`} component={() => <CasinoLive />} />{" "}
          <Route exact path={`/${allConfig["routePrematch"]}`} component={() => <Prematch />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
