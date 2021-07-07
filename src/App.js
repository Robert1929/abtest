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
      <button onClick={handleOriginal}>Original</button>
      <div style={{ color: "red" }}>Ai apasat de {number} ori;</div>

      <button onClick={handleVariant}>Variant 1</button>
      <div style={{ color: "green" }}>Ai apasat de {number} ori;</div>
    </div>
  );
}

export default App;
