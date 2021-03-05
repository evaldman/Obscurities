function Post ({post}){
    return (
        <Link to={`/posts/${post.id}`}>
        <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={post.image} />
        </div>
        </Link>
    )
}

export default Post

