import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
          <h1>{post.title}</h1>
          <img src={post.image} />
          <h3>By {post.author}</h3>
          <p>{post.content}</p>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default PostContent;
