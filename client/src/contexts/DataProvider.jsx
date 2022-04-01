import React, { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState();
  const [keyword, setKeyword] = useState("");
  const value = { category, setCategory, city, setCity, keyword, setKeyword };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
