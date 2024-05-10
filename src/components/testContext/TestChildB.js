import React from "react";
import { TestChildC } from "./TestChildC";

export const TestChildB = () => {
  console.log("TestChildB Rendered");
  return (
    <div>
      TestChildB
      <TestChildC />
    </div>
  );
};
