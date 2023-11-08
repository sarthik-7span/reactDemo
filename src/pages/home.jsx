import Navbar from "../component/Navbar";
import Chatbot from "../component/Chatbot";
import Demo from "../component/Demo";
import SlotMachin from "../component/SlotMachin";
import Form from "../component/Form";
import Todo from "../component/Todo";
import { createContext } from "react";
import { Link } from "react-router-dom";

const DemoContext = createContext();

function Home() {
  const fullname = {
    Fname: "sarthik",
    Lname: "kevadiya",
  };
  return (
    <>
      <DemoContext.Provider value={fullname}>
        <div className="bg-orange-500">
          <Link to="/about">Go to about</Link> <br />
          <Link to="/contact">Go to contact</Link>
        </div>

        <Navbar title="TextUtils" />
        <Chatbot />
        <Demo />
        <SlotMachin />
        <Form />
        <Todo />
      </DemoContext.Provider>
    </>
  );
}
export default Home;
export { DemoContext };
