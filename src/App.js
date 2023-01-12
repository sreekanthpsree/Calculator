import React, { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("");
  const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const del = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="container">
        <div className="output">
          <div className="previouseValue"></div>
          <div className="currentValue">{result}</div>
          {/* <input id="text" type="text" value={result} /> */}
        </div>
        <div className="keypad">
          <button id="clear" onClick={clear}>
            AC
          </button>
          <button className="symbols" id="del" onClick={del}>
            DEL
          </button>

          <button className="symbols" name="/" onClick={clickHandler}>
            &divide;
          </button>
          <button name="7" onClick={clickHandler}>
            7
          </button>
          <button name="8" onClick={clickHandler}>
            8
          </button>
          <button name="9" onClick={clickHandler}>
            9
          </button>
          <button className="symbols" name="*" onClick={clickHandler}>
            &times;
          </button>
          <button name="4" onClick={clickHandler}>
            4
          </button>
          <button name="5" onClick={clickHandler}>
            5
          </button>
          <button name="6" onClick={clickHandler}>
            6
          </button>
          <button className="symbols" name="-" onClick={clickHandler}>
            -
          </button>
          <button name="1" onClick={clickHandler}>
            1
          </button>
          <button name="2" onClick={clickHandler}>
            2
          </button>
          <button name="3" onClick={clickHandler}>
            3
          </button>
          <button className="symbols" name="+" onClick={clickHandler}>
            +
          </button>
          <button name="0" onClick={clickHandler}>
            0
          </button>
          <button name="." onClick={clickHandler}>
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
