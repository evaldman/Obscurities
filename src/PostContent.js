import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostStuff from './PostStuff'

function PostContent() {
  const [post, setPost] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((r) => r.json())
      .then((post) => {
        setPost(post);
        // setIsLoaded(true);
      });
  }, [id]);

  return (
    <>
      {post ? (
       <PostStuff post={post}/>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default PostContent;
