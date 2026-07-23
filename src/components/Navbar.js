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
        <li>
    <Link to="/">Home</Link>
</li>

<li>
    <Link to="/explore">Explore Events</Link>
</li>

<li>
    <Link to="/host">Host an Event</Link>
</li>

<li>
    <Link to="/pricing">Pricing</Link>
</li>
<li>
    <Link to="/dashboard">

Dashboard

</Link>
</li>


      </ul>

      <div className="nav-buttons">
       <Link to="/login">
        <button className="login">
            Log In
        </button>
    </Link>
  <Link to="/host" className="create-btn">
    Create Event
</Link>
      </div>
    </nav>
  );
}

export default Navbar;