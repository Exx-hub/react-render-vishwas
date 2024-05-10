import React from "react";
import { ChildC } from "./ChildC";

export const ChildB = () => {
  console.log("ChildB Rendered");
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};
