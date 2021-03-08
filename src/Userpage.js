import React from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";
import NewPost from './NewPost'

function Userpage({ currentUser, hobbies }) {
  //   console.log(currentUser);
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <PostsFeed currentUser={currentUser} />
      {hobbies && currentUser && <NewPost hobbies={hobbies} currentUser={currentUser}/>}
    </div>
  );
}

export default Userpage;
