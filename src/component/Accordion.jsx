import React, { useState } from "react";

function Accordion({ question, answer, tags }) {
  //   const [jsdata, setJsdata] = useState(jsonData);

  return (
    <div>
      <details style={{ cursor: "pointer" }}>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details>
    </div>
  );
}

export default Accordion;
