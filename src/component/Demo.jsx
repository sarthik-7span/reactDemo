import React, { useState, useEffect } from "react";
import Text, { Text1, Text2, name } from "../component/default";
import { data } from "../data";
import Heading from "./Heading";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { jsonData } from "../data";
import Title from "./Title";
import Accordion from "./Accordion";

function Demo() {
  const [FavMovie, SetFavmovie] = useState("Tere name");
  const [inc, Setincrement] = useState(0);
  const [alltime, setalltime] = useState(new Date().toLocaleTimeString());
  const [click, setclick] = useState("Laugh 😂");
  const [clickbg, setclickbg] = useState("bg-orange-400");
  const [value, setValue] = useState(new Date());
  const [jsData, setjsonData] = useState(jsonData);
  const [first, setfirst] = useState(false);
  const [up, setup] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const num = [1, 2, 3, 4, 5];
  const [bh, th, lh, gh, kk, vl, ok] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const squar = num.map(function (item) {
    return item * item + " ";
  });
  const find = (x) => {
    if (x === "Sarthik") {
      alert("7 crore");
    } else {
      alert("kal ana hooo..... ");
    }
  };
  const increment = () => {
    Setincrement(inc + 1);
  };
  const changeventsingle = () => {
    setclick("Cry 😭");
    setclickbg("bg-red-400");
  };
  const changeventdouble = () => {
    setclick("Stystuuumm... 😎");
    setclickbg("bg-yellow-400");
  };
  setInterval(() => {
    let time = new Date();
    setalltime(time.toLocaleTimeString());
  }, 1000);
  const fullname = {
    name: "sarthik",
    surname: "kevadiya",
  };

  return (
    <>
      <h1>Demo component</h1>
      <Button variant="outlined">Primary</Button>
      <h1>
        {Text}--{Text1}--{Text2}
      </h1>
      <p>{name()}</p>
      <span>{inc}</span>
      <button onClick={increment}>click here</button>
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
      <span>{lh}</span>
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
      <span className="text-7xl font-extrabold text-purple-600 text-center my-9 block">
        {alltime}
      </span>
      {/* How to handle Event */}
      <div className={`p-24 ${clickbg}`}>
        <span className="block text-center font-bold text-3xl text-white">
          click button to check event
        </span>
        <AddIcon />
        <DeleteIcon />

        <button onClick={changeventsingle} onDoubleClick={changeventdouble}>
          {click}
        </button>
        <div>
          <p>Current time:</p>
          <Clock value={value} />
        </div>
      </div>
      <div>
        <Title {...fullname} />
        <h1 className="text-4xl text-red-700 font-extrabold text-center">
          Accordion
        </h1>
        {jsData.map((item) => {
          const { id } = item;
          return <Accordion key={id} {...item} />;
        })}
      </div>
      <div>{first && <h1>hello true</h1>}</div>
      <button onClick={() => setfirst(!first)}>Click Me</button>
      <button onClick={() => setup(up + 1)}>Click sarthik {up}</button>
    </>
  );
}

export default Demo;
