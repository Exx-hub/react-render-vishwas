import React, { useContext } from "react";
import { Dummy } from "../DummyComponents/Dummy";
import { CountContext } from "./ParentContext";

export const ChildC = () => {
  const count = useContext(CountContext);

  console.log("ChildC Rendered");
  return (
    <>
      <div>ChildC{count}</div>

      <Dummy />
    </>
  );
};
