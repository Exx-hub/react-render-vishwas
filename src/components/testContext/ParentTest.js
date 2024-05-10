import React, { useContext } from "react";
import { CountingContext } from "./CountingContextProvider";
import { MemoizedTestChildA, TestChildA } from "./TestChildA";

function ParentTest({ children }) {
  const { count, setCount } = useContext(CountingContext);

  console.log("ParentTest Rendered");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        ParentTestCount - {count}{" "}
      </button>
      {/* <TestChildA /> */}
      {/* <MemoizedTestChildA /> */}
      {children}
    </div>
  );
}

export default ParentTest;
