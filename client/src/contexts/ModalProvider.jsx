import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [show, setShow] = useState(false);
  const value = { visibility, setVisibility, show, setShow };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
