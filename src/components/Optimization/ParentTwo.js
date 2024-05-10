import { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishwas");

  console.log("ParentTwo Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
