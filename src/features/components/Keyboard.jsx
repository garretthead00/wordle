import React from "react";
import { useWordle } from "../../context/WordleContext";

const Key = ({ keyLabel }) => {
  const isSpecialKey = keyLabel === "Enter" || keyLabel === "Delete";
  const { validatedKeys, handleKeyPress } = useWordle();

  return (
    <button
      className={`key p-2 sm:p-0 rounded font-secondary text-2xl sm:text-[16px] md:text-xl text-white justify-center ${
        isSpecialKey ? "w-20 sm:w-12 md:w-16 lg:w-20" : "w-12 h-12 sm:w-8 md:w-10 lg:w-14 sm:h-8 md:h-10 lg:h-12"
      } ${validatedKeys.correctKeys.includes(keyLabel)
        ? "bg-green-500"
        : validatedKeys.misplacedKeys.includes(keyLabel)
        ? "bg-yellow-500"
        : validatedKeys.incorrectKeys.includes(keyLabel)
        ? "bg-gray-400"
        : "bg-gray-700"}`}
      onClick={() => handleKeyPress(keyLabel)}
    >
      {keyLabel}
    </button>
  );
};

const KeyboardRow = ({ keys }) => (
  <div className="keyboard-row flex gap-1 sm:gap-[2px]">
    {keys.map((key) => (
      <Key key={key} keyLabel={key} />
    ))}
  </div>
);

export const Keyboard = () => {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"],
  ];

  return (
    <div className="keyboard flex flex-col gap-1 p-2 items-center mt-4">
      {keys.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex} keys={row} />
      ))}
    </div>
  );
};
