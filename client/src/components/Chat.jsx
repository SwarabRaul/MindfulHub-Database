import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [isDisabled,setIsDisabled] = useState(true)

  useEffect(() => {
    document.title = "Chat";
    document.body.style.backgroundColor = "#ffffff";

    localStorage.getItem("token") ? setIsDisabled(false) : setIsDisabled(true)
    

    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data)
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
        disabled={isDisabled}
      >
        Schedule a Chat with Expert
      </button>
      <button
        onClick={() => {
          navigate("/createpost");
        }}
        disabled={isDisabled}
      >
        Create a Post
      </button>
      {posts?.length !== 0 ? <>{posts?.map((item)=>{
        return(
          <div key={item._id}>
            <h1>{item.title}</h1>
            <h3>{item.message}</h3>
          </div>
        )
      })}</> : <h1>No post Found</h1>}
    </div>
  );
};

export default Chat;
