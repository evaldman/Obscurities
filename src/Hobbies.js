import React from "react";
import Hobby from "./Hobby";
import Navbar from "./Navbar";

function Hobbies({ hobbies, currentUser }) {
  const hobbiesDisplay = hobbies.map((hobby) => {
    return <Hobby key={hobby.id} hobby={hobby} />;
  });

  return (
    <div>
      <h1 style={{ color: "red" }}>Hobbies</h1>
      <Navbar currentUser={currentUser} />
      {hobbiesDisplay}
    </div>
  );
}

export default Hobbies;
