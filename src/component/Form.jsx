import React, { useState } from "react";

function Form() {
  const [fullname, setname] = useState({
    Fname: "",
    Lname: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setname((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const nameUpdate = (e) => {
    e.preventDefault();
    console.log("form submited" + " " + fullname.Fname + " " + fullname.Lname);
  };
  return (
    <div className="py-20">
      <h1 className="text-orange-500 text-5xl font-extrabold text-center">
        😍 form 😍
      </h1>
      <form className="max-w-lg mx-auto" onSubmit={nameUpdate}>
        <h3 className="font-bold text-3xl text-center my-6">
          Hello <span className="text-orange-600">{fullname.Fname}</span> Good
          Morning
        </h3>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={fullname.Fname}
          name="Fname"
        />
        <input
          type="text"
          placeholder="Enter Your password"
          onChange={inputEvent}
          value={fullname.Lname}
          name="Lname"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
