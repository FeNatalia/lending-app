import { encrypt, decrypt } from '../encryption';
import { useState, useEffect, useRef, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider.jsx';
import { useAuth } from '../contexts/AuthProvider';

const DM = ({ username, roomname }) => {
  const { socket, randomKey } = useContext(DataContext);
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  socket.open();

  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  useEffect(() => {
    const unsubscribe = socket.on('receive_message', data => {
      const text = decrypt(data.message);
      data.message = text;
      console.log(text);
      setMessages(m => [...m, data]);
    });

    return unsubscribe;
  }, [socket]);

  const sendData = async () => {
    if (text !== '') {
      const aes256 = encrypt(text);
      const messageData = {
        room: socket.id,
        author: user.name,
        message: aes256,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setText('');
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      <div className="chat-message">
        {messages.map(i => {
          if (i.author === username) {
            return (
              <div key={randomKey()} className="message">
                <p>{i.message}</p>
                <span>{i.author}</span>
              </div>
            );
          } else {
            return (
              <div key={randomKey()} className="message mess-right">
                <p>{i.message} </p>
                <span>{i.author}</span>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="send">
        <input
          placeholder="enter your message"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={e => {
            e.key === 'Enter' && sendData();
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
};
export default DM;
