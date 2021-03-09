import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar({ currentUser, createButtonClick, homeButtonClick, postsButtonClick, setCurrentUser, hobbiesButtonClick}) {
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
        {currentUser ? <h3>Welcome {currentUser.username} </h3> : <h3> </h3>}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="nav-text">
            <Link to="users" onClick={homeButtonClick}>
              <span>Feed</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="#" onClick={hobbiesButtonClick}>
              <span>Hobbies</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="users" onClick={createButtonClick}>
              <span>CreatePost</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="users" onClick={postsButtonClick}>
              <span>My Posts</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/" onClick={()=> setCurrentUser(null)}>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
