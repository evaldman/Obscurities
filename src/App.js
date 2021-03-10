import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Hobbies from "./Hobbies";
import Posts from "./Posts";
import PostContent from "./PostContent";
import Userpage from "./Userpage";

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // console.log(currentUser);

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
          <div className="homepage">
            <Homepage setCurrentUser={setCurrentUser} />
          </div>
        </Route>
        <Route exact path="/users">
          <div className="user-page">
            {currentUser && <Userpage setCurrentUser={setCurrentUser} currentUser={currentUser} hobbies={hobbies}/>}
          </div>
        </Route>
        <Route exact path="/hobbies">
          <div className="hobbies">
            <Hobbies hobbies={hobbies} currentUser={currentUser} />
          </div>
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/hobbies/:id">
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <PostContent currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
