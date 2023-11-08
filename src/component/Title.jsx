import React from "react";

function Title({ name, surname }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{surname}</p>
    </div>
  );
}

export default Title;
