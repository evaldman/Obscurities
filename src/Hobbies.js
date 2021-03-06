import React from "react";
import Hobby from "./Hobby";

function Hobbies({ hobbies }) {
  const hobbiesDisplay = hobbies.map((hobby) => {
    return <Hobby key={hobby.id} hobby={hobby} />;
  });

  return (
    <div>
      <h1 style={{ color: "red" }}>Hobbies</h1>
      {hobbiesDisplay}
    </div>
  );
}

export default Hobbies;
