import { useState } from "react";
import ButtonsContainer from "./components/ButtonssContainer";
import Display from "./components/Display";
import "./components/Display.modular.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (button) => {
    if (button === "C") {
      setCalVal("");
    } else if (button === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + button;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
