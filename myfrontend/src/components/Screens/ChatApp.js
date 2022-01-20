import React, { useState } from "react";
import socketIO from "socket.io-client";
import Message from "./Message";
import Header from "../Header";
const connection = socketIO.connect("http://localhost:4001");

const ChatApp = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [show, setShow] = useState(false);

  const enterRoom = () => {
    if (name !== "" && room !== "") {
      connection.emit("enter_room", room);
      setShow(true);
    }
  };

  return (
    <div >
        <Header/>
      {!show ? (
          <>
        <div className="containerChat">
          <h1>Echat</h1>
          <div className="input">
              <div className="input-name">

          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="input-room">

          <input
            type="text"
            placeholder="room ID"
            onChange={(e) => setRoom(e.target.value)}
            />
            </div>
            </div>
            <span onClick={enterRoom}><a></a></span>

        </div>
            </>
      ) : (
        <>
          <Message room={room} connection={connection} name={name} />
        </>
      )}
    </div>
  );
};

export default ChatApp;
