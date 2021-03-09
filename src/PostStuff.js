import React from "react";
import "./postStuff.css";

function PostStuff({ post }) {
  // console.log(post);
  return (
    <div>
      <div className="feed-card">
        <img className="feed-card-img" src={post.image} alt={post.title} />

        <div className="feed-card-body">
          <div className="feed-overline">By {post.author}</div>
          <div className="feed-card-title">{post.title}</div>
          <div className="feed-card-subtitle">{post.content}</div>
        </div>

        <div className="feed-card-footer">
          <button className="feed-btn">Comment</button>
        </div>
      </div>
    </div>
  );
}

export default PostStuff;

//      <div>
//   <h1>{post.title}</h1>
//   <img src={post.image} alt={post.title} />
//   <h3>By {post.author}</h3>
//   <p>{post.content}</p>
// </div>
