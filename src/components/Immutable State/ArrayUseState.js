import { useState } from "react";

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(["Bruce", "Wayne"]);

  const handleClick = () => {
    // persons.push("Clark");
    // persons.push("Kent");
    // setPersons(persons);
    // will not work becaus object reference did not change. no re render

    // const newPersons = [...persons];
    // newPersons.push("Clark");
    // newPersons.push("Kent");
    // setPersons(newPersons);
    //this is what happens under the hood. reference needs to change to cause a rerender

    setPersons([...persons, "Clark", "Kent"]);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};
