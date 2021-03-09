import React, { useState } from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";
import NewPost from "./NewPost";

function Userpage({ currentUser, hobbies }) {
  const [createClick, setCreateClick] = useState(true);
  //   console.log(currentUser);
  function createButtonClick() {
    setCreateClick(false);
  }

  function homeButtonClick() {
    setCreateClick(true);
  }

  // console.log(createClick);
  return (
    <div>
      <Navbar
        currentUser={currentUser}
        createButtonClick={createButtonClick}
        homeButtonClick={homeButtonClick}
      />
      {createClick ? (
        <PostsFeed currentUser={currentUser} />
      ) : (
        <>
          {hobbies && currentUser && (
            <NewPost hobbies={hobbies} currentUser={currentUser} />
          )}
        </>
      )}
    </div>
  );
}

export default Userpage;
