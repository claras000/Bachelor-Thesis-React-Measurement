import { useState } from "react";
import "./App.css";
import RecursiveDomElement from "./component/RecursiveDomElement";

/**
 * Main App that contains all circles
 */
function App() {
  const [changeColors, setChangeColors] = useState(0);

  // state to trigger new dynamic circle style render
  const increment = () => {
    setChangeColors(changeColors + 1);
  };

  return (
    <>
      <h1>Rekursiver DOM-Baum</h1>
      <button onClick={increment} id="colorButton" className="colorButton">
        change color
      </button>
      <p>{changeColors}</p>
        {[...Array(10)].map((_,i) => (
            <RecursiveDomElement
            key={i}
            style={"padding= 0"}
        depth={10}
        state={changeColors}
      ></RecursiveDomElement>
        ))}
    </>
  );
}

export default App;
