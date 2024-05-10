import React from "react";
import { TestChildB } from "./TestChildB";

export const TestChildA = () => {
  console.log("TestChildA Rendered");
  return (
    <div>
      TestChildA
      <TestChildB />
    </div>
  );
};

export const MemoizedTestChildA = React.memo(TestChildA);
