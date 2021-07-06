import "./App.css";
import React from "react";
import { Experiment, Variant } from "react-optimize";
const handleOriginal = () => {
  console.log("Original");
};
const handleVariant = () => {
  console.log("Variant");
};
function App() {
  return (
    <Experiment id="<experiment-id>">
      <Variant id="0">
        <button onClick={handleOriginal}>Original</button>
      </Variant>
      <Variant id="1">
        <button onClick={handleVariant}>Variant 1</button>
      </Variant>
    </Experiment>
  );
}

export default App;
