import "./App.css";
import React from "react";
import Car from "./Components/Car";
import Bicycle from "./Components/Bicycle";
import Bus from "./Components/Bus";
import Stateboard from "./Components/Stateboard";
import Truck from "./Components/Truck";

function App() {
  return (
    <div className="App">
      <Car></Car>
      <Bicycle />
      <Bus />
      <Stateboard />
      <Truck />
    </div>
  );
}

export default App;
