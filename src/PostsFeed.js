import React from "react";
import PostStuff from "./PostStuff";
import PostContent from "./PostContent";

function PostsFeed({ currentUser }) {
  const posts = currentUser
    ? currentUser.fav_posts.map((post) => (
        // <PostStuff key={post.id} post={post} currentUser={currentUser}/>
        <PostContent key={post.id} fav={post} currentUser={currentUser}/>
      ))
    : null;
  return <div>{posts}</div>;
}

export default PostsFeed;
