import React, { useState } from "react";
import "./App.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [previouseValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");
  function resultHandler() {
    console.log(operator, currentValue, previouseValue);
    if (operator === "/") {
      let results = parseFloat(previouseValue) / parseFloat(currentValue);
      setPreviousValue(results);
      setCurrentValue("");
      setOperator("");
    } else if (operator === "+") {
      let results = parseFloat(previouseValue) + parseFloat(currentValue);
      setPreviousValue(results);
      setCurrentValue("");
      setOperator("");
    } else if (operator === "-") {
      let results = parseFloat(previouseValue) - parseFloat(currentValue);
      setPreviousValue(results);
      setCurrentValue("");
      setOperator("");
    } else if (operator === "*") {
      let results = parseFloat(previouseValue) * parseFloat(currentValue);
      setPreviousValue(results);
      setCurrentValue("");
      setOperator("");
    }
  }

  function digitHandler(e) {
    let digit = e.target.value;
    console.log(typeof parseFloat(digit));

    if (previouseValue && operator) {
      setCurrentValue(currentValue.concat(digit));
      console.log(typeof parseFloat(currentValue));
    } else if (!previouseValue) {
      if (digit === "0" && currentValue === "0") {
        return currentValue;
      }
      if (digit === "." && currentValue.includes(".")) {
        return currentValue;
      }
      return setCurrentValue(currentValue.concat(digit));
    }
  }
  function operationhandler(e) {
    let operators = e.target.value;
    if (previouseValue || currentValue) {
      setOperator(operators);
    }
    if (previouseValue && currentValue && operator) {
      resultHandler();
    } else if (previouseValue) {
      return;
    } else {
      setPreviousValue(currentValue);
    }
    setCurrentValue("");
  }
  function clearHandler() {
    setCurrentValue("");
    setPreviousValue("");
    setOperator("");
  }
  function deletehandler() {
    if (currentValue) {
      setCurrentValue(currentValue.slice(0, -1));
    }

    if (operator && !currentValue) {
      setOperator("");
    }
    if (previouseValue && !currentValue && !operator) {
      setPreviousValue(previouseValue.slice(0, -1));
    }
  }
  return (
    <>
      <div className="container">
        <div className="output">
          <div className="previouseValue">
            {previouseValue}
            {operator}
          </div>
          <div className="currentValue">{currentValue}</div>
        </div>
        <div className="keypad">
          <button id="clear" onClick={clearHandler}>
            AC
          </button>
          <button id="del" onClick={deletehandler}>
            DEL
          </button>

          <OperationButton
            operation="/"
            className="symbols"
            click={operationhandler}
          >
            &divide;
          </OperationButton>
          <DigitButton digit="7" click={digitHandler}>
            7
          </DigitButton>
          <DigitButton digit="8" click={digitHandler}>
            8
          </DigitButton>
          <DigitButton digit="9" click={digitHandler}>
            9
          </DigitButton>

          <OperationButton
            operation="*"
            className="symbols"
            click={operationhandler}
          >
            &times;
          </OperationButton>
          <DigitButton digit="6" click={digitHandler}>
            6
          </DigitButton>
          <DigitButton digit="5" click={digitHandler}>
            5
          </DigitButton>
          <DigitButton digit="4" click={digitHandler}>
            4
          </DigitButton>

          <OperationButton
            operation="-"
            className="symbols"
            click={operationhandler}
          >
            -
          </OperationButton>
          <DigitButton digit="3" click={digitHandler}>
            3
          </DigitButton>
          <DigitButton digit="2" click={digitHandler}>
            2
          </DigitButton>
          <DigitButton digit="1" click={digitHandler}>
            1
          </DigitButton>

          <OperationButton
            operation="+"
            className="symbols"
            click={operationhandler}
          >
            +
          </OperationButton>
          <DigitButton digit="0" click={digitHandler}>
            0
          </DigitButton>
          <DigitButton digit="." click={digitHandler}>
            .
          </DigitButton>
          <button id="result" onClick={resultHandler}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
