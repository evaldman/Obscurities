import React, { useState } from "react";
import Navbar from "./Navbar";
import PostsFeed from "./PostsFeed";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";
import Hobbies from "./Hobbies";
import PostContent from "./PostContent";

function Userpage({ currentUser, setCurrentUser, hobbies }) {
  const [createClick, setCreateClick] = useState("home");
  // const posts = currentUser.fav_posts.map((post) => (
  //   // <PostStuff key={post.id} post={post} currentUser={currentUser} />
  //   <PostContent key={post.id} fav={post} currentUser={currentUser} handleDeletePost={handleDelete}/>
  //   ))
  const onLoad = currentUser.fav_posts.filter(
    (post) => post.user_id !== currentUser.id
  );
  const [posts, setPosts] = useState(onLoad);

  const postsToDisplay = posts.map((post) => (
    <PostContent
      key={post.id}
      fav={post}
      currentUser={currentUser}
      handleDeletePost={handleDelete}
    />
  ));

  // console.log(postsToDisplay);
  function createButtonClick() {
    setCreateClick("createForm");
  }

  function homeButtonClick() {
    setPosts(
      currentUser.fav_posts.filter((post) => post.user_id !== currentUser.id)
    );
    setCreateClick("home");
  }

  function postsButtonClick() {
    const showPosts = currentUser.posts.sort((a, b) => b.id - a.id);

    setPosts(showPosts);
    setCreateClick("my posts");
  }

  function hobbiesButtonClick() {
    setCreateClick("hobbies");
  }

  function handleDelete(id) {
    console.log(id);
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(setCurrentUser);
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
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
      {createClick === "createForm" ? (
        <>
          {hobbies && (
            <NewPost
              hobbies={hobbies}
              currentUser={currentUser}
              setCreateClick={setCreateClick}
              setCurrentUser={setCurrentUser}
              postsButtonClick={postsButtonClick}
              setPosts={setPosts}
              posts={posts}
            />
          )}
        </>
      ) : createClick === "hobbies" ? (
        <Hobbies
          hobbies={hobbies}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        // <MyPosts currentUser={currentUser} />
        postsToDisplay
      )}
    </div>
  );
}

export default Userpage;
