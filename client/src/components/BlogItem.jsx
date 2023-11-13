import { useNavigate } from "react-router-dom"

const BlogItem = (props) => {

    const navigate = useNavigate()

    const handleBlog = () => {
        navigate('/blog/'+props.id)
    }

  return (
    <div onClick={handleBlog} >
        <h2>{props.title}</h2>
        <h4>{props.desc}</h4>
        <h5>{props.author}</h5>
    </div>
  )
}

export default BlogItem