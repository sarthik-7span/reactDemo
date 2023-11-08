import React, { useContext } from "react";
import { DemoContext } from "../pages/home";

function Heading(props) {
  const context = useContext(DemoContext);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        <span className="text-green-500">{props.heading}</span>
      </h1>
      <p>
        Name: {context.Fname}// Lname: {context.Lname}
      </p>
    </>
  );
}

export default Heading;
