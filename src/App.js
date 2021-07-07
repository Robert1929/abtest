import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const handleOriginal = () => {
    console.log("Original");
    setNumber(number + 1);
  };
  const handleVariant = () => {
    console.log("Variant");
    setNumber(number - 1);
  };
  return (
    <div>
      <button style={{ color: "red" }} onClick={handleOriginal}>
        Original
      </button>
      <button style={{ color: "red" }} onClick={handleVariant}>Variant 1</button>
      <div>Ai apasat de {number} ori;</div>
    </div>
  );
}

export default App;
