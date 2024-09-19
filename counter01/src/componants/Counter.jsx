import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <div className="title">Counter</div>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button>{count}</button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
              setCount((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
