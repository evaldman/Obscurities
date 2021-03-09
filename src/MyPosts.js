import React from "react";
import PostStuff from "./PostStuff";

function MyPosts({ currentUser }) {
  const posts = currentUser
    ? currentUser.posts.map((post) => (
        <PostStuff key={post.id} post={post} />
      ))
    : null;
  return <div>{posts}</div>;
}

export default MyPosts
