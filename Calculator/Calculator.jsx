import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleButton = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className={`calculator-container ${darkMode ? "dark" : "light"}`}>
      <div className="calculator-header">
        <h2>Calculator</h2>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <input
        className="calculator-display"
        type="text"
        value={input}
        readOnly
      />

      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`calc-btn ${btn === "=" ? "equals" : ""} ${btn === "C" ? "clear" : ""}`}
            onClick={() => handleButton(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
