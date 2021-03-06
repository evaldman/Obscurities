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
      <h2>Posts</h2>
      {postsToDisplay}
    </>
  );
}

export default Posts;
