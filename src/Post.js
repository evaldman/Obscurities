import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="post-container">
      <div className="post-cards">
        <div className="post-card">
          <div className="post-card-inner">
            <Link to={`/posts/${post.id}`}>
              <div className="post-card-front">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-card-back">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
