import "./CreatePost.css";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [data, setDate] = useState({
    title: "",
    description: "",
    anonymous: false,
  });

  useEffect(() => {
    document.title = "Create Post";
    // background color
    document.body.style.backgroundColor = "#ddf9d2";

  }, []);

  const handleClick = () => {
    console.log(data);
    // fetch("http://localhost:8081/post/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //   credentials: "include",
    // }).then((res) => {
    //   console.log(res);
    // });
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
            value={data.description}
            onChange={(event) => {
              setDate({ ...data, description: event.target.value });
            }}
          ></textarea>
          <div className="createpost_right_checkbox">
            <input
              type="checkbox"
              name="anonymous"
              id="anonymous"
              value={data.anonymous}
              onChange={() => {
                setDate({ ...data, anonymous: !data.anonymous });
              }}
            />
            <label htmlFor="anonymous">Post Anonymously</label>
          </div>
          <button onClick={handleClick}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
