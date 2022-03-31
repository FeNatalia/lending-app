import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const value = { category, setCategory, city, setCity };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
