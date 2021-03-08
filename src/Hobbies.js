import React from "react";
import Hobby from "./Hobby";
import Navbar from "./Navbar";

function Hobbies({ hobbies, currentUser }) {
  const hobbiesDisplay = hobbies.map((hobby) => {
    return <Hobby key={hobby.id} hobby={hobby} />;
  });

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <h1 style={{ color: "red" }}>Hobbies</h1>
      {hobbiesDisplay}
    </div>
  );
}

export default Hobbies;
