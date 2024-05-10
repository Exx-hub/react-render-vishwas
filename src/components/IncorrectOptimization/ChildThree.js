import React from "react";

export const ChildThree = ({ children, name }) => {
  console.log("ChildThree Rendered");
  return (
    <>
      <div>ChildThree</div>
      <div>
        {children} - {name}
      </div>
    </>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);
