import React from "react";

function Listitem(props) {
  return (
    <li className="bg-orange-500 p-3 rounded-xl text-white font-semibold text-2xl">
      <i
        className="fa-solid fa-xmark mr-4 text-white bg-red-700 p-2 rounded-full cursor-pointer hover:bg-green-700"
        onClick={() => props.removelist(props.index)}
      ></i>
      {props.items},{props.index}
    </li>
  );
}

export default Listitem;
