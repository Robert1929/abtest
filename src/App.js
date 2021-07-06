import "./App.css";
import React, { useState } from "react";
import { Experiment, Variant } from "react-optimize";

function App() {
  const [number, setNumber]=useState(0);
  const handleOriginal = () => {
    console.log("Original");
    setNumber(number+1);
  };
  const handleVariant = () => {
    console.log("Variant");
    setNumber(number-1)
  };
  return (
    <Experiment id="<experiment-id>">
      <Variant id="0">
        <button onClick={handleOriginal}>Original</button>
        <div>Ai apasat de {number} ori;</div>
      </Variant>
      <Variant id="1">
        <button onClick={handleVariant}>Variant 1</button>
        <div>Ai apasat de {number} ori;</div>
      </Variant>
    </Experiment>
  );
}

export default App;
