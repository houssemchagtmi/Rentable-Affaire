import React, { useEffect, useState } from "react";

const Message = ({ room, name, connection }) => {
  const [current, setCurrent] = useState();
  const [message, setMessage] = useState([]);
  const currentMessage = async () => {
    if (current !== "") {
      const Data = {
        room,
        author: name,
        messages: current,
      };
      await connection.emit("send_message", Data);
      setMessage((value) => [...value, Data]);
    }
  };
  useEffect(() => {
    connection.on("receive_message", (anotherValue) =>
      setMessage((value) => [...value, anotherValue])
    );
  }, [connection]);
  return (
    <div className="message-container">
      <div className="chat-holder">
        {message.map((item) => {
          return (
            <div className="message" id={name === item.author? 'you':'him'}>
              <div className="message-content">
                <p  >{ name === item.author? 'you':'him'}: {item.messages}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="send-input">
        <textarea
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setCurrent(e.target.value)}
        ></textarea>
        <button onClick={currentMessage}>Send</button>
      </div>
      
    </div>
  );
};

export default Message;
