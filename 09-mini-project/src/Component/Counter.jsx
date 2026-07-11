import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const jumpTo5 = () => {
    setCount(count + 5);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1
        className="storeCount"
        style={{
          color: count >= 10 ? "green" : count <= 0 ? "red" : "#2563eb",
        }}
      >
        {count}
      </h1>
      <button onClick={increase} className="increase">
        Increase
      </button>
      <button onClick={decrease} className="decrease">
        Decrease
      </button>
      <br />
      <button onClick={jumpTo5} className="jump5">
        JUMP +5
      </button>
      <button onClick={reset} className="reset">
        RESET
      </button>
    </div>
  );
};

export default Counter;
