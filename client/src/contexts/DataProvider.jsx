import React, { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState();
  const [keyword, setKeyword] = useState("");
  const value = {
    category,
    setCategory,
    city,
    setCity,
    keyword,
    setKeyword,
    items,
    setItems,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
