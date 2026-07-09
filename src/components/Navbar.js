import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo-box">
        <img src={logo} alt="logo" className="logo-img" />
       
      </div>

      <ul>
        <li>Explore Events</li>
        <li>Host an Event</li>
        <li>Pricing</li>
        <li>Features</li>
        <li>Resources</li>
      </ul>

      <div className="nav-buttons">
       <Link to="/login">
        <button className="login">
            Log In
        </button>
    </Link>
        <button className="create">Create Event</button>
      </div>
    </nav>
  );
}

export default Navbar;