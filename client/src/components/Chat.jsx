import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import './Chat.css';

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    document.title = "Chat";
    document.body.style.backgroundColor = "#ffffff";

    localStorage.getItem("token") ? setIsDisabled(false) : setIsDisabled(true)


    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      });
  }, []);

  return (
    <div class="backgrd">
      <div class="chatbox">
      {/* <img src="./images/gif1.gif" alt="Animated GIF" /> */}
        <div class="title">
          <h1>CHAT</h1>
        </div>
        <div class="btn_chat">
          <button class="btn1">Live Chat</button>
          <button class="btn2"
            onClick={() => {
              navigate("/schedulechat");
            }}
          // disabled={isDisabled}
          >
            Schedule a Chat with Expert
          </button>
          <button class="btn3"
            onClick={() => {
              navigate("/createpost");
            }}
          // disabled={isDisabled}

          >
            Create a Post
          </button>
        </div>
        {posts?.length !== 0 ? <>{posts?.map((item) => {
          return (
            <div key={item._id} onClick={() => {
              navigate(`/${item._id}`)
            }} >
              <h1>{item.title}</h1>
              <h3>{item.message}</h3>
            </div>
          )
        })}</> : <h1>No post Found</h1>}
      </div>
    </div>
  );
};

export default Chat;
