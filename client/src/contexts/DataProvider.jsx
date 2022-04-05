import React, { createContext, useState } from 'react';
import { io } from 'socket.io-client';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const socket = io('http://localhost:8080');

  const value = {
    category,
    setCategory,
    city,
    setCity,
    keyword,
    setKeyword,
    items,
    setItems,
    socket,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
