import "./CreatePost.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [data, setDate] = useState({
    title: "",
    message: "",
    isAnonymous: false,
  });

  const [id, setId] = useState("");

  const navigate = useNavigate()
  
  useEffect(() => {
    document.title = "Create Post";
    // background color
    document.body.style.backgroundColor = "#ddf9d2";
    localStorage.getItem("token")
      ? setId(localStorage.getItem("token"))
      : setId("");
  }, []);

  const handleClick = () => {
    fetch("http://localhost:8081/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, user: id }),
      credentials: "include",
    }).then((res) => {
      if(res.status===200){
        alert("Post Created Successfully")
        navigate('/chat')
      }
    });
  };

  return (
    <div className="createpost">
      <div className="createpost_container">
        <div className="createpost_left">
          <h1>Create a Post</h1>
          <h4>
            Create a post on any topic related to mental well being whether it
            is to get some help, help someone, or ask questions.
          </h4>
        </div>
        <div className="createpost_right">
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(event) => {
              setDate({ ...data, title: event.target.value });
            }}
          />
          <textarea
            placeholder="Description"
            value={data.message}
            onChange={(event) => {
              setDate({ ...data, message: event.target.value });
            }}
          ></textarea>
          <div className="createpost_right_checkbox">
            <input
              type="checkbox"
              name="anonymous"
              id="anonymous"
              value={data.isAnonymous}
              onChange={() => {
                setDate({ ...data, isAnonymous: !data.isAnonymous });
              }}
            />
            <label htmlFor="anonymous">Post Anonymously</label>
          </div>
          <button
            onClick={() => {
              localStorage.getItem("token")
                ? handleClick()
                : alert("Please Login to create a post");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
