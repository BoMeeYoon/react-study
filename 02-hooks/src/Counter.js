import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  function plus() {
    setNumber((prev) => prev + 1);
  }
  function minus() {
    setNumber((prev) => prev - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
