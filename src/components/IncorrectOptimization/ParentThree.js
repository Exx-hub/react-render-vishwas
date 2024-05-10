import { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishwas");

  console.log("ParentThree Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildFour name={name} />
    </div>
  );
};
