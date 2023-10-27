import React, { useState } from "react";

function Todo() {
  const [todo, settodo] = useState("");
  const [item, setitem] = useState(["Sarthik", "Sunny"]);

  const funtodo = (e) => {
    settodo(e.target.value);
  };
  const addtodo = () => {
    setitem((old) => {
      return [...old, todo];
    });
    settodo("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addtodo();
    }
  };
  const removelist = (index) => {
    setitem((old) => {
      const updatedList = [...old];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <div className="py-24 bg-blue-200 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="bg-orange-500 text-white py-4 text-5xl font-extrabold text-center mb-5">
          Todo List
        </h1>
        <div className="flex gap-4 mb-7">
          <input
            type="text"
            placeholder="Add a item"
            className="w-full px-4 !border-0 !border-b-2 focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold"
            onChange={funtodo}
            onKeyPress={handleKeyPress}
            value={todo}
          />
          <button
            onClick={addtodo}
            className="px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-green-600 focus:outline-none text-3xl font-extrabold"
          >
            +
          </button>
        </div>
        <ul className="bg-yellow-300 py-6 px-3 rounded-2xl min-h-[200px] flex flex-col gap-5">
          {item.map((items, index) => {
            return (
              <li
                key={index}
                className="bg-orange-500 p-3 rounded-xl text-white font-semibold text-2xl"
              >
                <i
                  className="fa-solid fa-xmark mr-4 text-white bg-red-700 p-2 rounded-full cursor-pointer hover:bg-green-700"
                  onClick={() => removelist(index)}
                ></i>
                {items},{index}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
