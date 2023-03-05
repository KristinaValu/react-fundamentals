import { useState } from "react";

export default function StatefulComponent34() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    const positive = count > 0;
    if (positive) {
      setCount(prevCount => prevCount - 1);
    }
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>
        <span>Result:{count} </span>
      </p>
    </div>
  );
}
