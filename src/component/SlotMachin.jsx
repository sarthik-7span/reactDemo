import React from "react";

function SlotMachin() {
  const Slot = (props) => {
    const { x, y, z } = props;

    if (x === y && y === z) {
      return (
        <>
          <div className="text-center text-3xl font-bold bg-blue-300 p-4 border-2 border-purple-500">
            <h1>
              {x}
              {y}
              {z}
            </h1>
            <p className="text-green-600">this is matching. </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="text-center text-3xl font-bold bg-blue-300 p-4 border-2 border-purple-500">
            <h1>
              {x}
              {y}
              {z}
            </h1>
            <p className="text-red-600">this is Not matching.</p>
          </div>
        </>
      );
    }
  };
  return (
    <div className="py-9 bg-green-300">
      <h2 className="text-orange-500 text-5xl font-extrabold text-center">
        🎰 Slot Machine 🎰
      </h2>

      <div className="mt-16">
        <Slot x="😄" y="😄" z="😄" />
        <Slot x="👿" y="👿" z="💓" />
        <Slot x="😪" y="🤯" z="🤯" />
        <Slot x="💔" y="💔" z="💔" />
        <Slot x="👻" y="🤩" z="🤩" />
      </div>
    </div>
  );
}

export default SlotMachin;
