import React from "react";
import PostStuff from "./PostStuff";

function PostsFeed({ currentUser }) {
  const posts = currentUser
    ? currentUser.fav_posts.map((post) => (
        <PostStuff key={post.id} post={post} />
      ))
    : null;
  return <div>{posts}</div>;
}

export default PostsFeed;
