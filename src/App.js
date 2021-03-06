import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Hobbies from "./Hobbies";
import Posts from "./Posts";
import PostContent from "./PostContent";

function App() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hobbies")
      .then((response) => response.json())
      .then((data) => setHobbies(data));
  }, []);

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/hobbies">
          <Hobbies hobbies={hobbies} />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/hobbies/:id">
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <PostContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
