import Navbar from "../component/Navbar";
import Chatbot from "../component/Chatbot";
import Demo from "../component/Demo";
import SlotMachin from "../component/SlotMachin";
import Form from "../component/Form";

function Home() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Chatbot />
      <Demo />
      <SlotMachin />
      <Form />
    </>
  );
}
export default Home;
