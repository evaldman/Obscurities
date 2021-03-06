import React from "react";
import Posts from "./Posts";
import { Link } from "react-router-dom";
import "./Hobby.css";

function Hobby({ hobby }) {
  return (
    <div id="vueBind" class="container">
      <div v-for="data in content" class="card">
        <Link to={`/hobbies/${hobby.id}`}>
          <div class="imgBox">
            <img src={hobby.image} alt={hobby.name} />
          </div>
          <div class="content">
            <div class="contentBox">
              <h3>{hobby.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hobby;
