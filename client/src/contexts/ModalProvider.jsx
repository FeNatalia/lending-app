import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const value = { visibility, setVisibility };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
