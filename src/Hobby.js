import React from "react";
import { Link } from "react-router-dom";

function Hobby({ hobby }) {
  return (
    <div id="vueBind" className="container">
      <div v-for="data in content" className="card">
        <Link to={`/hobbies/${hobby.id}`}>
          <div className="imgBox">
            <img src={hobby.image} alt={hobby.name} />
          </div>
          <div className="content">
            <div className="contentBox">
              <h3>{hobby.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hobby;
