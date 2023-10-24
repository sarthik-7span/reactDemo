import React, { useState } from "react";

function Slot(props) {
  const { x, y, z } = props.emojis;

  const matching = x === y && y === z;
  const bgColor = matching ? "bg-blue-300" : "bg-red-300";
  const textColor = matching ? "text-green-600" : "text-red-600";

  return (
    <div
      className={`text-center text-3xl font-bold ${bgColor} p-4 border-2 border-purple-500`}
    >
      <h1>
        {x}
        {y}
        {z}
      </h1>
      <p className={textColor}>
        {matching ? "This is matching." : "This is not matching."}
      </p>
    </div>
  );
}

function SlotMachine() {
  const [slot1, setSlot1] = useState({ x: "😄", y: "😄", z: "😄" });
  const [slot2, setSlot2] = useState({ x: "👻", y: "😪", z: "💔" });
  const [slot3, setSlot3] = useState({ x: "😪", y: "💔", z: "👻" });
  const [slot4, setSlot4] = useState({ x: "💔", y: "👻", z: "💔" });

  const changeEmojis = () => {
    const emojisList = ["😄", "👻", "😪", "💔"];
    const randomEmoji = () =>
      emojisList[Math.floor(Math.random() * emojisList.length)];

    setSlot1({ x: randomEmoji(), y: randomEmoji(), z: randomEmoji() });
    setSlot2({ x: randomEmoji(), y: randomEmoji(), z: randomEmoji() });
    setSlot3({ x: randomEmoji(), y: randomEmoji(), z: randomEmoji() });
    setSlot4({ x: randomEmoji(), y: randomEmoji(), z: randomEmoji() });
  };

  return (
    <div className="py-24 bg-green-300">
      <h2 className="text-orange-500 text-5xl font-extrabold text-center">
        🎰 Slot Machine 🎰
      </h2>

      <div className="mt-16 max-w-xl mx-auto">
        <div>
          <Slot emojis={slot1} />
          <Slot emojis={slot2} />
          <Slot emojis={slot3} />
          <Slot emojis={slot4} />
        </div>
      </div>

      <button className="mt-4 bg-pink-600 px-24" onClick={changeEmojis}>
        Try Your Luck
      </button>
    </div>
  );
}

export default SlotMachine;
