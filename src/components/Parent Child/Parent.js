import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount(0)}>reset to 0</button>
      <button onClick={() => setCount(5)}>count to 5</button>
      <Child />
    </div>
  );
};
