import "./styles.css";
import { useState } from "react";

function Slot() {
  const [playerTurn, changePlayerTurn] = useState("red");
  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  var customclassName = "inner-slot " + playerTurn;
  console.log(customclassName);
  return (
    <div className="slotA" onClick={togglePlayerTurn}>
      <div className={customclassName}></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Slot />
      <Slot />
      <Slot />
      <Slot />
    </div>
  );
}
