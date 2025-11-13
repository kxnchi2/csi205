import React, { useState, useEffect } from "react";
import "./PageCalculator.css";

function PageCalculator() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [lastSecondValue, setLastSecondValue] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);

  // 🔢 ฟังก์ชันช่วย
  const safeNumber = (s) => (s === "" || s == null ? 0 : Number(s));
  const roundNumber = (n) => {
    if (!isFinite(n)) return "Error";
    let r = Math.round((n + Number.EPSILON) * 1e12) / 1e12;
    return String(r).replace(/\.?0+$/, "");
  };
  const performCalculation = (op, a, b) =>
    ({ "+": a + b, "-": a - b, "*": a * b, "/": b === 0 ? NaN : a / b }[op] ?? b);

  // 🧭 ปุ่มตัวเลขและตัวดำเนินการ
  const numberClicked = (num) => {
    let newDisplay;
    if (waitingForSecond) {
      newDisplay = String(num);
      setWaitingForSecond(false);
    } else newDisplay = display === "0" ? String(num) : display + num;
    setDisplay(newDisplay);
  };

  const decimalClicked = () => {
    if (waitingForSecond) {
      setDisplay("0.");
      setWaitingForSecond(false);
      return;
    }
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const ceClicked = () => {
    setDisplay("0");
    setWaitingForSecond(false);
  };

  const plusMinusClicked = () =>
    display !== "0" &&
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);

  const percentClicked = () =>
    setDisplay(String(roundNumber(safeNumber(display) / 100)));

  const reciprocalClicked = () => {
    const val = safeNumber(display);
    setDisplay(val === 0 ? "Error" : String(roundNumber(1 / val)));
  };

  const operatorClicked = (nextOp) => {
    const val = safeNumber(display);
    if (operator && !waitingForSecond) {
      const result = performCalculation(operator, firstValue, val);
      setDisplay(String(roundNumber(result)));
      setFirstValue(result);
    } else setFirstValue(val);
    setWaitingForSecond(true);
    setOperator(nextOp);
    setLastOperator(nextOp);
  };

  const equalClicked = () => {
    const val = safeNumber(display);
    if (operator) {
      const result = performCalculation(operator, firstValue, val);
      setDisplay(String(roundNumber(result)));
      setFirstValue(result);
      setLastSecondValue(val);
      setOperator(null);
      setWaitingForSecond(false);
    } else if (lastSecondValue !== null) {
      const result = performCalculation(lastOperator, firstValue, lastSecondValue);
      setDisplay(String(roundNumber(result)));
      setFirstValue(result);
    }
  };

  // ⌨️ รองรับแป้นพิมพ์
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (k >= "0" && k <= "9") numberClicked(Number(k));
      else if (k === ".") decimalClicked();
      else if (["+", "-", "*", "/"].includes(k)) operatorClicked(k);
      else if (k === "Enter" || k === "=") equalClicked();
      else if (k === "Escape" || k === "c" || k === "C") ceClicked();
      else if (k === "Backspace")
        display.length > 1 ? setDisplay(display.slice(0, -1)) : setDisplay("0");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [display, firstValue, operator]);

  return (
    <div className="cal-container">
      <h4 style={{ textAlign: "center", marginBottom: "0.8rem", color: "#3b82f6" }}>
        ⚡ Smart Calculator
      </h4>
      <div id="screen" className="cal-screen">{display}</div>

      <div className="row">
        <button className="cal-btn cal-btn-green" disabled>MC</button>
        <button className="cal-btn cal-btn-green" disabled>MR</button>
        <button className="cal-btn cal-btn-green" disabled>M+</button>
        <button className="cal-btn cal-btn-green" disabled>M-</button>
        <button className="cal-btn cal-btn-red" onClick={ceClicked}>CE</button>
      </div>

      <div className="row">
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(7)}>7</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(8)}>8</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(9)}>9</button>
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked('/')}>÷</button>
        <button className="cal-btn cal-btn-orange" onClick={percentClicked}>%</button>
      </div>

      <div className="row">
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(4)}>4</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(5)}>5</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(6)}>6</button>
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked('*')}>×</button>
        <button className="cal-btn cal-btn-orange" onClick={reciprocalClicked}>1/x</button>
      </div>

      <div className="row">
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(1)}>1</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(2)}>2</button>
        <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(3)}>3</button>
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked('-')}>−</button>
        <button className="cal-btn cal-btn-orange" onClick={plusMinusClicked}>±</button>
      </div>

      <div className="row">
        <button className="cal-btn cal-btn-blue wide" onClick={() => numberClicked(0)}>0</button>
        <button className="cal-btn cal-btn-blue" onClick={decimalClicked}>.</button>
        <button className="cal-btn cal-btn-green" onClick={() => operatorClicked('+')}>+</button>
        <button className="cal-btn cal-btn-orange" onClick={equalClicked}>=</button>
      </div>

      <p className="kbd-hint">💡 ใช้แป้นพิมพ์ได้ เช่น 1+2 แล้วกด Enter</p>
    </div>
  );
}

export default PageCalculator;
