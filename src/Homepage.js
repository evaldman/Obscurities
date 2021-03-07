import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Homepage({ setCurrentUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      // .then((data) => {
      //   if (data.errors) {
      //     data.errors.map((error) => console.log(error));
      //   } else {
      //     console.log(data);
      //   }
      // });
      .then((user) => setCurrentUser(user));
    history.push("/hobbies");
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="login-input"
          type="text"
          name="username"
          value={formData.username}
          placeholder="username..."
          onChange={handleChange}
        />
        <br />
        <lable>Password</lable>
        <input
          className="login-input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="password..."
          onChange={handleChange}
        />
        <br />
        <input className="login-button" type="submit" value="Sign Up!" />
        <input className="login-button" type="submit" value="Login!" />
        <Link to="/hobbies">explore</Link>
      </form>
    </div>
  );
}

export default Homepage;
