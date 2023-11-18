import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Chat.css';

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    document.title = "Chat";

    localStorage.getItem("token") ? setIsDisabled(false) : setIsDisabled(true);

    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="backgrd">
      <div className="chatbox">
        {/* <img src="./images/gif1.gif" alt="Animated GIF" /> */}
        <div className="chat">
          <h1>ChatRoom</h1>
          <h3>Secure place to ask for help or help others.</h3>
          </div>
          <div className="btn_chat">

          <button className="btn1" onClick={() => navigate("/livechat")}>
            Live Chat
          </button>
          <button
            className="btn2"
            onClick={() => {
              navigate("/schedulechat");
            }}
            disabled={isDisabled}
          >
            One on one help
          </button>
          <button
            className="btn3"
            onClick={() => {
              navigate("/createpost");
            }}
            disabled={isDisabled}
          >
            Create a Post
          </button>
          </div>
        
        <div className="content">
          {posts?.length !== 0 ? (
            <>
              {posts?.map((item) => {
                return (
                  <div className="blog"
                    key={item._id}
                    onClick={() => {
                      navigate(`/${item._id}`);
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.message}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <h1>No post Found</h1>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Chat;
