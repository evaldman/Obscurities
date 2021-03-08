import React from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";

function Userpage({ currentUser }) {
  //   console.log(currentUser);
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <PostsFeed currentUser={currentUser} />
    </div>
  );
}

export default Userpage;
