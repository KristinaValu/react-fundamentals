import { useState, useEffect } from "react";

export default function SynchronizingWITHeffects35() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    if (count === 5) {
      alert("Hight FIVE!");
    }
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>
        <span>Result: {count}</span>
      </p>
    </div>
  );
}
