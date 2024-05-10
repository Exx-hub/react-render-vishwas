import { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParentOne = () => {
  const [newCount, setNewCount] = useState(0);

  console.log("Grand Parent rendered");
  return (
    <div>
      <button onClick={() => setNewCount((prev) => prev + 1)}>
        Grand ParenCount - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};
