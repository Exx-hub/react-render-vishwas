import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();
  console.log("ChildFour render");
  return (
    <div>
      hello {name}. It is currently {date.getHours()}: {date.getMinutes()}:{" "}
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);
