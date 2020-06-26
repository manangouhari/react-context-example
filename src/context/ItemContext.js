import React, { useState, createContext } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(["item-1", "item-2", "item-3"]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  );
};
