import React from "react";
import { ChildB } from "./ChildB";

export const ChildA = () => {
  console.log("ChildA Rendered");
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);
