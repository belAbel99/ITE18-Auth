import React, { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const addToInventory = (product) => {
    setInventory((prevInventory) => [...prevInventory, product]);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addToInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
