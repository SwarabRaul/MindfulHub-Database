import './CreatePost.css';

const CreatePost = () => {
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
          <input type="text" placeholder="Title" />
          <textarea placeholder="Description"></textarea>
          <div className="createpost_right_checkbox">
            <input type="checkbox" name="anonymous" id="anonymous" />
            <label htmlFor="anonymous">Post Anonymously</label>
          </div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
