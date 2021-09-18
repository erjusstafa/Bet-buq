import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { useDispatch } from "react-redux";
import { thunkApiHome } from "./redux-toolkit/store/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkApiHome());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={(props) => <Home />} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
