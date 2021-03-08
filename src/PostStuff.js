import React from 'react'

function PostStuff({post}) {
    return (
        <div>
             <div>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <h3>By {post.author}</h3>
          <p>{post.content}</p>
        </div>
            
        </div>
    )
}

export default PostStuff
