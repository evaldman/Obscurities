import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const id = params.id;
  // console.log(params);
  useEffect(() => {
    fetch(`http://localhost:3000/hobbies/${id}`)
      .then((r) => r.json())
      .then((hobby) => {
        setPosts(hobby.posts);
        // setIsLoaded(true);
      });
  }, [id]);
  //   console.log(posts)
  const postsToDisplay = posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <>
      {posts.length === 0 ? 
      <h1 style={{ color: "red" }}>Wow! Such empty</h1> :
      <h1 style={{ color: "red" }}>Posts</h1>
      
      }
      {postsToDisplay}
    </>
  );
}

export default Posts;
