import { useState } from "react";

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ParentOne Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      {children}
    </div>
  );
};
