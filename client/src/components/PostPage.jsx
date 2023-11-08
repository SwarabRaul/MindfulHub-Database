import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  // get :id from nav
  const { id } = useParams();
  const [userid, setuserid] = useState("");
  const [user, setUser] = useState("Anonymous");
  const [postData, setPostData] = useState({
    title: "",
    message: "",
  });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    message: "",
    user: "",
    isAnonymous: false,
    post: "",
  });

  useEffect(() => {
    localStorage.getItem("token")
      ? setuserid(localStorage.getItem("token"))
      : setuserid("");

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/post/${id}`);
        const postData = await response.json();
        setPostData(postData);
        setComments(postData.comments);

        if (!postData.post.isAnonymous) {
          const userResponse = await fetch(
            `http://localhost:8081/user/${postData.post.user}`
          );
          const userData = await userResponse.json();
          setUser(userData.username);
        } else {
          setUser("Anonymous");
        }
      } catch (error) {
        // Handle any errors, e.g., network issues, in a meaningful way.
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleComment = () => {
    if (userid) {
      setNewComment((prev) => ({
        ...prev,
        user: userid,
        post: id,
      }));

      fetch("http://localhost:8081/post/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((res) => res.json())
        .then((data) => {
          setComments((prev) => [...prev, data]);
          setNewComment({
            message: "",
            user: "",
            isAnonymous: false,
            post: "",
          });
        });
    } else {
      alert("Please Login to Comment");
    }
  };

  return (
    <>
      <h1>{postData?.post?.title}</h1>
      <p>{postData?.post?.message}</p>
      <h4>{user}</h4>
      <hr />
      <h4>Comments</h4>

      <input
        type="text"
        placeholder="This post was really helpful..."
        value={newComment.message}
        onChange={(e) =>
          setNewComment((prev) => ({
            ...prev,
            message: e.target.value,
          }))
        }
      />
      <input
        type="checkbox"
        value={newComment.isAnonymous}
        onChange={(e) => {
          setNewComment((prev) => ({
            ...prev,
            isAnonymous: e.target.checked,
          }));
        }}
      />
      <label>Anonymous</label>
      <button disabled={!userid} onClick={handleComment}>
        Comment
      </button>

      {comments?.length !== 0 ? (
        <>
          {comments?.map((comment) => {
            return (
              <div key={comment._id}>
                <h5>{comment.message}</h5>
                <h6>{comment.isAnonymous ? "Anonymous" : comment.user}</h6>
              </div>
            );
          })}
        </>
      ) : (
        <h3>No Comments Found</h3>
      )}
    </>
  );
};

export default PostPage;
