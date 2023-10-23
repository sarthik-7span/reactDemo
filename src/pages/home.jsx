import Navbar from "../component/Navbar";
import Chatbot from "../component/Chatbot";
import Demo from "../component/Demo";
import SlotMachin from "../component/SlotMachin";

function Home() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Chatbot />
      <Demo />
      <SlotMachin />
    </>
  );
}
export default Home;
