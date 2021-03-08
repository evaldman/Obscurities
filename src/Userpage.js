import React from "react";
import Navbar from "./Navbar";

function Userpage({ currentUser }) {
  console.log(currentUser);
  return (
    <div>
      <Navbar currentUser={currentUser} />
    </div>
  );
}

export default Userpage;
