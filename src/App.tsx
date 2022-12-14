import { useState } from "react";
import logoX from "../public/tic-tac-toe-0.png";
import logoO from "../public/tic-tac-toe-x.png";
import "./App.css";

function App() {
  const [board, setBoard] = useState("");

  return (
    <div className="App">
      <div className="grid-container">
        <div className="field-1">
          {board === "x" ? (
            <img src={logoX} alt="" />
          ) : (
            <img src={logoO} alt="" />
          )}
        </div>
        <div className="field-2"></div>
        <div className="field-3"></div>
        <div className="field-4"></div>
        <div className="field-5"></div>
        <div className="field-6"></div>
        <div className="field-7"></div>
        <div className="field-8"></div>
        <div className="field-9"></div>
      </div>
    </div>
  );
}

export default App;
