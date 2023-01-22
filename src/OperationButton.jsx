import React from "react";
import "./App.css";

function OperationButton({ operation, click }) {
  return (
    <div>
      <button className="digit" value={operation} onClick={click}>
        {operation}
      </button>
    </div>
  );
}

export default OperationButton;
