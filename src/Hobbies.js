import React from "react";
import Hobby from "./Hobby";


function Hobbies({ hobbies, currentUser, setCurrentUser}) {
  const hobbiesDisplay = hobbies.map((hobby) => {
    return <Hobby key={hobby.id} hobby={hobby} currentUser={currentUser} setCurrentUser={setCurrentUser}/>;
  });

  return (
    <div>
      
      <h1>Hobbies</h1>
      {hobbiesDisplay}
    </div>
  );
}

export default Hobbies;
