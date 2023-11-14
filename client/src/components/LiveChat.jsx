import { useEffect, useState } from "react";
import { socket } from "../socket";

const LiveChat = () => {
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState("Anonymous");

  const [msg, setMsg] = useState({
    user: "",
    msg: "",
  });

  useEffect(() => {
    socket.connect();
    setUsername(prompt("Username"))
    socket.on('message',(msg)=>{
        setMessage((prev)=>{
            return [...prev,msg]
        })
    })
  }, []);

  const handleButton = () => {
    socket.emit("message", msg);
    setMessage((prev)=>{
        return [...prev,msg]
    })
    setMsg({
      user: "",
      msg: "",
    });
  }

  return (
    <div>
      <h1>Live Chat</h1>
      {message?.map((item,index) => {
        return (
          <div key={index}>
            <h4>{item.user}</h4>
            <p>{item.msg}</p>
          </div>
        );
      })}
      <textarea
        onChange={(e) => {
          setMsg({
            user: username,
            msg: e.target.value,
          });
        }}
        placeholder="Write your message"
      ></textarea>
      <button onClick={handleButton} ></button>
    </div>
  );
};

export default LiveChat;
