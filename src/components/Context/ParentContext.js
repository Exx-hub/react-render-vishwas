import React, { createContext, useState } from "react";
import { ChildA, MemoizedChildA } from "./ChildA";

export const CountContext = createContext();

function ParentContext() {
  const [count, setCount] = useState(0);
  console.log("ParentContext Rendered");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        ParentContext{count}
      </button>

      <CountContext.Provider value={count}>
        {/* <ChildA /> */}
        <MemoizedChildA />
      </CountContext.Provider>
    </>
  );
}

export default ParentContext;
