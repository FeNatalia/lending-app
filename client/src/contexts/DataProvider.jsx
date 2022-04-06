import React, { createContext, useState } from 'react';
import { io } from 'socket.io-client';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  //prettier-ignore
  const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';
  const socket = io(SERVER_URL, {
    autoConnect: false,
  });

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const randomKey = () => Math.random().toString(36).substring(2);

  const value = {
    randomKey,
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
