import React, { createContext, useState } from "react";

export const CountingContext = createContext();

function CountingContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountingContext.Provider value={{ count, setCount }}>
      {children}
    </CountingContext.Provider>
  );
}

export default CountingContextProvider;
