import { useState } from "react";
import "./App.css";

// prettier-ignore
const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", "C", "=", "+",
  ];

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const calculateResult = () => {
    if (!display) return;

    const match = display.match(/^(\d+)([+\-*/])(\d+)$/);

    if (!match) {
      setDisplay("エラー");
      return;
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    let result = 0;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      setDisplay("エラー");
    }

    setDisplay(String(result));
  };

  const handleButtonClick = (value) => {
    if (display === "エラー") {
      const isOperator = ["+", "-", "*", "/", "="].includes(value);
      setDisplay(isOperator || value === "C" ? "" : value);
      return;
    }

    if (value === "C") {
      setDisplay("");
      return;
    }

    if (value === "=") {
      calculateResult();
      return;
    }
    setDisplay((prev) => prev + value);
  };

  return (
    <div className="calculator-container">
      <h2>電卓アプリ</h2>
      <div className="display-area">{display || "0"}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
