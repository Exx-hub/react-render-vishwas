import React from "react";

export const ChildFive = ({ name, person, func }) => {
  console.log("Child five render");
  return (
    <div>
      hello {name} {person.firstName} {person.lastName}
    </div>
  );
};

export const MemoizedChildFive = React.memo(ChildFive);
