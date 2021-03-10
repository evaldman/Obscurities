import React, { useState } from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";
import NewPost from "./NewPost";
import MyPosts from './MyPosts'
import Hobbies from './Hobbies'

function Userpage({ currentUser, setCurrentUser, hobbies }) {
  const [createClick, setCreateClick] = useState("home");
  //   console.log(currentUser);
  function createButtonClick() {
    
    setCreateClick("createForm");
  }

  function homeButtonClick() {
   
    setCreateClick("home");
  }

  function postsButtonClick() {
   
    setCreateClick("my posts");
  }

  function hobbiesButtonClick() {
    
    setCreateClick("hobbies");
  }


  // console.log(createClick);
  return (
    <div>
      <Navbar
        currentUser={currentUser}
        createButtonClick={createButtonClick}
        homeButtonClick={homeButtonClick}
        postsButtonClick={postsButtonClick}
        hobbiesButtonClick={hobbiesButtonClick}
        setCurrentUser={setCurrentUser}
      />
      {createClick === "home" ? (
        <PostsFeed currentUser={currentUser} />
      ) : createClick === "createForm" ?(
        <>
          {hobbies && currentUser && (
            <NewPost hobbies={hobbies} currentUser={currentUser} setCreateClick={setCreateClick} setCurrentUser={setCurrentUser}/>
          )}
        </>
      ): createClick === "hobbies" ? 
      <Hobbies hobbies={hobbies} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      :
      <MyPosts currentUser={currentUser} />
      }
    </div>
  );
}

export default Userpage;
