import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hobby({ hobby, currentUser, setCurrentUser }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (currentUser) {
      return currentUser.favoriteds.map((favorited) => {
        if (favorited.name === hobby.name) {
          setIsFavorite(true);
        }
      });
    }
  }, []);

  function handleClick() {
    if (!isFavorite) {
      fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: currentUser.id, hobby_id: hobby.id }),
      })
        .then((res) => res.json())
        .then(setCurrentUser);
    } else {
      fetch("http://localhost:3000/favorites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: currentUser.id, hobby_id: hobby.id }),
      })
        .then((res) => res.json())
        .then(setCurrentUser);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <div id="vueBind" className="container">
        <div v-for="data in content" className="card">
          <Link to={`/hobbies/${hobby.id}`}>
            <div className="imgBox">
              <img src={hobby.image} alt={hobby.name} />
            </div>
          </Link>
          <div className="content">
            <div className="contentBox">
              <h3>{hobby.name}</h3>

              {currentUser ? (
                <button onClick={handleClick}>
                  {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Hobby;
