import { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishwas");

  const person = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => console.log("hi");

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Rendered");
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      {/* <MemoizedChildFive
        name={name}
        // person={person}
        // func={handleClick}
      /> */}
      <MemoizedChildFive
        name={name}
        person={memoizedPerson}
        func={memoizedHandleClick}
      />
    </div>
  );
};
