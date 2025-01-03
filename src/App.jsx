import { useState } from "react";
import "./App.css";
import RecursiveDomElement from "./component/RecursiveDomElement";

function App() {
  const [changeColors, setChangeColors] = useState(0);

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
      <RecursiveDomElement
        depth={12}
        state={changeColors}
      ></RecursiveDomElement>
    </>
  );
}

export default App;
