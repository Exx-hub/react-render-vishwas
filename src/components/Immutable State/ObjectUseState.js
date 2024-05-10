import { useState } from "react";

export const ObjectUseState = () => {
  const [person, setPerson] = useState({
    firstName: "Bruce",
    lastName: "Wayne",
  });

  console.log(person, "hello");

  console.log("Component rendered");

  const changeName = () => {
    // setPerson({
    //   firstName: "alvin",
    //   lastName: "acosta",
    // });

    const newPerson = { ...person };
    newPerson.firstName = "alvin";
    newPerson.lastName = "acusta";

    setPerson(newPerson);
  };

  return (
    <div>
      <button onClick={changeName}>
        {person.firstName} - {person.lastName}
      </button>
    </div>
  );
};
