import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div class="post-container">
        <div class="post-cards">
          <div class="post-card">
            <div class="post-card-inner">
              <div class="post-card-front">
                <img src={post.image} alt={post.title} />
              </div>
              <div class="post-card-back">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
