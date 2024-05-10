import React, { useContext } from "react";
import { CountingContext } from "./CountingContextProvider";

export const TestChildC = () => {
  const { count } = useContext(CountingContext);
  console.log("TestChildC Rendered");
  return <div>TestChildC - {count}</div>;
};
