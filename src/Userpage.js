import React, { useState } from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";
import NewPost from "./NewPost";
import MyPosts from './MyPosts'
import Hobbies from './Hobbies'
import PostContent from './PostContent'

function Userpage({ currentUser, setCurrentUser, hobbies }) {
  const [createClick, setCreateClick] = useState("home");
  const posts = currentUser.fav_posts.map((post) => (
    // <PostStuff key={post.id} post={post} currentUser={currentUser} />
    <PostContent key={post.id} fav={post} currentUser={currentUser}/>
    ))
    
    const [postsToDisplay, setPostsToDisplay] = useState(posts)
    
    console.log(postsToDisplay);
  function createButtonClick() {
    
    setCreateClick("createForm");
  }

  function homeButtonClick() {
    const showPosts = currentUser.fav_posts.map((post) => (
       
        <PostContent key={post.id} fav={post} currentUser={currentUser}/>
      ))
    
    setPostsToDisplay(showPosts)
    setCreateClick("home");
  }

  function postsButtonClick() {
    const showPosts = currentUser.posts.sort((a,b) => b.id - a.id)
    .map((post) => (
        // <PostStuff key={post.id} post={post} currentUser={currentUser} />
        <PostContent key={post.id} fav={post} currentUser={currentUser}/>
      ))
    
    setPostsToDisplay(showPosts)
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
      {createClick === "createForm" ?(
        <>
          {hobbies && (
            <NewPost hobbies={hobbies} currentUser={currentUser} setCreateClick={setCreateClick} setCurrentUser={setCurrentUser}/>
          )}
        </>
      ): createClick === "hobbies" ? 
      <Hobbies hobbies={hobbies} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      :
      // <MyPosts currentUser={currentUser} />
      postsToDisplay
      }
    </div>
  );
}

export default Userpage;
