import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={post.image} alt={post.title} />
      </div>
    </Link>
  );
}

export default Post;
