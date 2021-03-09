import React, { useState } from "react";
// import  {Dropdown} from "semantic-ui-react"
import { useHistory } from "react-router-dom";
import "./newPost.css";

function NewPost({ hobbies, currentUser }) {
  const history = useHistory();
  const [newPost, setNewPost] = useState({
    user_id: currentUser.id,
    hobby_id: "",
    title: "",
    description: "",
    image: "",
    content: "",
  });

  function handleChange(e) {
    const value =
      e.target.name === "hobby_id" ? parseInt(e.target.value) : e.target.value;
    setNewPost({ ...newPost, [e.target.name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push(`/posts/${data.id}`);
      });
  }

  const options = hobbies.map((hobby) => {
    return (
      <option key={hobby.id} value={hobby.id}>
        {" "}
        {hobby.name}
      </option>
    );
  });

  return (
    // <div className="shade">
    <div className="blackboard">
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <p>
            <label>Hobby: </label>
            <select
              value={newPost.hobby_id}
              name="hobby_id"
              onChange={handleChange}
            >
              <option value hidden>
                Select Hobby
              </option>
              {options}
            </select>
          </p>
          <p>
            <label>Title: </label>
            <input
              type="text"
              // placeholder="title"
              value={newPost.title}
              name="title"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Description: </label>
            <input
              type="text"
              // placeholder="description"
              value={newPost.description}
              name="description"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Image: </label>
            <input
              type="text"
              // placeholder="image"
              value={newPost.image}
              name="image"
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Content: </label>
            <textarea
              // placeholder="content"
              value={newPost.value}
              name="content"
              onChange={handleChange}
            ></textarea>
          </p>
          <p className="wipeout">
            <button type="submit">Create Post</button>
          </p>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default NewPost;
