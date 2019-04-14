import React, { Component } from "react";
import Selector from "./components/Selector";
// import { fakeData } from "./components/fakeData";
import fakeData from "./assets/data/fakeData.json";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Selector data={fakeData.fakeData}>Trigger</Selector>
      </div>
    );
  }
}

export default App;
