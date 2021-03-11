import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Homepage({ setCurrentUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const [loginClick, setLoginClick] = useState("");
  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setCurrentUser(data);
          history.push("/users");
        }
      });
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    // console.log(loginClick);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setCurrentUser(data);
          history.push("/users");
        }
      });
  }

  function handleClick(e) {
    const action = e.target.value;
    setLoginClick(action);
  }

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={
          loginClick === "Login!" ? handleLoginSubmit : handleSignupSubmit
        }
      >
        <label>Username</label>
        <input
          autoComplete="username"
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
          autoComplete="current-password"
          className="login-input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="password..."
          onChange={handleChange}
        />

        <br />
        <input
          className="login-button"
          type="submit"
          value="Login!"
          onClick={handleClick}
        />
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
        <input
          className="login-button"
          type="submit"
          value="Sign Up!"
          onClick={handleClick}
        />
        <Link to="/hobbies">
          <input className="login-button" type="submit" value="Explore" />
        </Link>
      </form>
    </div>
  );
}

export default Homepage;
