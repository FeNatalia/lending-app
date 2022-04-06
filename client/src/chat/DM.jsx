import { encrypt, decrypt } from "../encryption";
import { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../contexts/DataProvider.jsx";

const DM = ({ username, roomname }) => {
  const { socket, randomKey } = useContext(DataContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  socket.open();

  socket.onAny((event, ...args) => {
    // console.log("======11");
    // console.log(event);
    // console.log(args);
    // console.log("======22");
    // const ans = decrypt(data);
    // const msg = {
    //   userId: data.userId,
    //   username: data.username,
    //   text: ans,
    // };
    // console.log("LLLLLL");
    // console.log(data);
    // console.log(msg);
  });

  useEffect(() => {
    const unsubscribe = socket.on("message", (data) => {
      console.log("Resid");
      const ans = decrypt(data);

      const msg = {
        userId: data.userId,
        username: data.username,
        text: ans,
      };
      setMessages((m) => [...m, msg]);
    });

    return unsubscribe;
  }, [socket]);

  const sendData = () => {
    if (text) {
      const ans = encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      <div className="user-name">
        <h2>
          {username} <span style={{ fontSize: "1rem" }}>in {roomname}</span>
        </h2>
      </div>
      <div className="chat-message">
        {messages.map((i) => {
          if (i.username === username) {
            return (
              <div key={randomKey()} className="message">
                <p>{i.text}</p>
                <span>{i.username}</span>
              </div>
            );
          } else {
            return (
              <div key={randomKey()} className="message mess-right">
                <p>{i.text}</p>
                <span>{i.username}</span>
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
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && sendData();
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
};
export default DM;
