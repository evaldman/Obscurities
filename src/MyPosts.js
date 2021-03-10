import React from "react";
import PostContent from "./PostContent";

function MyPosts({ currentUser }) {
    
  const posts = currentUser
    ? currentUser.posts.sort((a,b) => b.id - a.id)
    .map((post) => (
        // <PostStuff key={post.id} post={post} currentUser={currentUser} />
        <PostContent key={post.id} fav={post} currentUser={currentUser}/>
      ))
    : null;
  return <div>{posts}</div>;
}

export default MyPosts
