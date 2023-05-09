import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 3 === 0 && count !== 0) alert("짝");
  }, [count]);


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "30px" }}>You clicked {count} times</div>

      <div style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
        <button style={{ margin: "5px" }} onClick={plus}>
          +
        </button>
        <button style={{ margin: "5px" }} onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}