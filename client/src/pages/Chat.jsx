import React from 'react';
import { io } from 'socket.io-client';
import DM from '../chat/DM';
import SideBar from '../components/sidebar/SideBar';

const Chat = () => {
  const socket = io('http://localhost:8080');
  return (
    <div>
      <SideBar />
      <DM roomname="hi" socket={socket} username="John" />
    </div>
  );
};

export default Chat;
