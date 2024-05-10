import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("UseState Render");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount(0)}>reset to 0</button>
      <button onClick={() => setCount(5)}>count to 5</button>
    </div>
  );
};
