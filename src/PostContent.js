import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostStuff from "./PostStuff";

function PostContent({ currentUser, fav, handleDeletePost }) {
  const [post, setPost] = useState(null);
  const params = useParams();
  const id = fav ? fav.id : params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((r) => r.json())
      .then((post) => {
        setPost(post);
      });
  }, [id]);

  return (
    <div>
      {post ? (
        <PostStuff
          post={post}
          currentUser={currentUser}
          handleDeletePost={handleDeletePost}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default PostContent;
