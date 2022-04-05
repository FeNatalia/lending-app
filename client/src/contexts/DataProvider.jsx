import React, { createContext, useState } from 'react';
import { io } from 'socket.io-client';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const socket = io('http://localhost:8080', {
    autoConnect: false,
  });

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

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
    username,
    setUsername,
    room,
    setRoom,
    showChat,
    setShowChat,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
