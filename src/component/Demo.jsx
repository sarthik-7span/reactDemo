import React, { useState } from "react";
import Text, { Text1, Text2, name } from "../component/default";
import { data } from "../data";
import Heading from "./Heading";

function Demo() {
  const [FavMovie, SetFavmovie] = useState("Tere name");

  const num = [1, 2, 3, 4, 5];
  const squar = num.map(function (item) {
    return item * item + " ";
  });
  const find = (x) => {
    if (x === "Sarthik") {
      alert("7 crore");
    } else {
      alert("kal ana hooo.....");
    }
  };

  return (
    <>
      <h1>Demo component</h1>
      <h1>
        {Text}--{Text1}--{Text2}
      </h1>
      <p>{name()}</p>
      <div>
        <Heading heading="Find the different name..." />
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <button onClick={() => find(item.name)}>{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <p>{squar}</p>
      <div>
        <span className="text-center text-3xl font-extrabold block">
          Favourite movie name :{" "}
          <span className="text-red-700">
            {FavMovie === "Tere name" ? "loser" : "winner"}
          </span>
        </span>
        <button onClick={() => SetFavmovie("KGF")}>KGF</button>
        <button onClick={() => SetFavmovie("Tere name")}>Tere name</button>
      </div>
    </>
  );
}

export default Demo;
