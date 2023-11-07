import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();

  useEffect(() => {
    document.title = "Chat";
    document.body.style.backgroundColor = "#ffffff";

    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <button>Live Chat</button>
      <button
        onClick={() => {
          navigate("/schedulechat");
        }}
      >
        Schedule a Chat with Expert
      </button>
      <button
        onClick={() => {
          navigate("/createpost");
        }}
      >
        Create a Post
      </button>
      {posts?.length !== 0 ? <></> : <h1>No post Found</h1>}
    </div>
  );
};

export default Chat;
