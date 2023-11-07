import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h1 className="navbar_header">MindfulHub</h1>
      <ul className="navbar_ul">
        <li><a href="#">BLOGS</a></li>
        <li><a href="#">RESOURCES</a></li>
        <li><a href="#">CHAT</a></li>
        <li><a href="#">LOGIN</a></li>

      </ul>
    </div>
  )
}

export default Navbar