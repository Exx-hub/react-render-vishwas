import { GrandChild } from "./GrandChild";

export const Child = () => {
  console.log("Child Rendered");
  return (
    <>
      <div>Child</div>
      <GrandChild />
    </>
  );
};
