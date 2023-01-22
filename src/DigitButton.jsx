import React from "react";
import "./App.css";

function DigitButton({ digit, click }) {
  return (
    <div>
      <button className="digit" value={digit} onClick={click}>
        {digit}
      </button>
    </div>
  );
}

export default DigitButton;
