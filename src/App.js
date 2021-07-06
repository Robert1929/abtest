import "./App.css";
import React from "react";
import { Experiment, Variant } from "react-optimize";
let ceva = <div></div>;
const handleOriginal = () => {
  console.log("Original");
  ceva = <div>Original</div>;
};
const handleVariant = () => {
  console.log("Variant");
  ceva = <div>Variant</div>;
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
      {ceva}
    </Experiment>
  );
}

export default App;
