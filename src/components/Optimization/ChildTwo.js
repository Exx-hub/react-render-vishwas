import React from "react";

export const ChildTwo = ({ name }) => {
  console.log("ChildTwo Rendered");
  return (
    <>
      <div>ChildTwo</div>
      <h1>{name}</h1>
    </>
  );
};

export const MemoizedChildTwo = React.memo(ChildTwo);
