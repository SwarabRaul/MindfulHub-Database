import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

  const element = <FontAwesomeIcon icon={faCoffee} />


import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h1 className="navbar_header"><Link to="/"><i class="fa-solid fa-leaf"></i>MindfulHub</Link></h1>
      <ul className="navbar_ul">
        <li><NavLink to="/">BLOGS</NavLink></li>
        <li><NavLink to="/">RESOURCES</NavLink></li>
        <li><NavLink to="/chat">CHAT</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>

      </ul>
    </div>
  )
}

export default Navbar