import React from "react";
import { useWordle } from "../../context/WordleContext";

const Key = ({ keyLabel }) => {
  const { handleKeyPress } = useWordle();
  const isSpecialKey = keyLabel === "Enter" || keyLabel === "Delete";
  return (
    <button
      className={`key px-4 py-2 rounded font-bold text-white bg-gray-700 hover:bg-gray-600 ${
        isSpecialKey ? "w-20" : "w-12"
      }`}
      onClick={() => handleKeyPress(keyLabel)}
    >
      {keyLabel}
    </button>
  );
};

const KeyboardRow = ({ keys }) => (
  <div className="keyboard-row flex gap-1">
    {keys.map((key) => (
      <Key key={key} keyLabel={key} />
    ))}
  </div>
);

export const Keyboard = () => {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"]
  ];

  return (
    <div className="keyboard flex flex-col gap-2 items-center mt-4">
      {keys.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex} keys={row} />
      ))}
    </div>
  );
};
