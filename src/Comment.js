import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Comment({ comment, currentUser, handleDelete }) {
  const [content, setContent] = useState(comment.content);
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
  }

  return (
    <div>
      <h3>{comment.user.username}:</h3>
      <div id="wrap">
        <div className="talkbubble">
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></input>
              <button type="submit">Update</button>
            </form>
          ) : (
            <>{content}</>
          )}
        </div>
      </div>

      {currentUser && currentUser.username === comment.user.username ? (
        <>
          <button
            className="edit-comment-btn"
            onClick={() => setShowForm(true)}
          >
            Edit Comment
          </button>
          <div>
            <FaRegTrashAlt
              className="edit-comment-icon"
              onClick={() => handleDelete(comment.id)}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Comment;
