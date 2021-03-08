import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar({ currentUser }) {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  // console.log(sidebar);
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
        {currentUser ? (
          <h3>Welcome back {currentUser.username} </h3>
        ) : (
          <h3> </h3>
        )}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="nav-text">
            <Link to="favorites">
              <span>Favorites</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="hobbies">
              <span>Hobbies</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="newPost">
              <span>CreatePost</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
