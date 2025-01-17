import React from "react";
import { useWordle } from "../../context/WordleContext";

const Cell = ({ content, feedback }) => (
  <div
    className={`cell flex items-center justify-center border border-gray-400 text-lg font-bold ${
      feedback || "bg-white"
    }`}
    style={{ width: "64px", height: "64px" }}
  >
    {content}
  </div>
);

const GridRow = ({ guess, feedback, wordLength }) => (
  <div className="row contents">
    {Array.from({ length: wordLength }).map((_, j) => (
      <Cell key={j} content={guess[j] || ""} feedback={feedback[j]} />
    ))}
  </div>
);

export const Grid = () => {
  const { guesses, validatedRows, WORD_LENGTH, MAX_ATTEMPTS } = useWordle();

  return (
    <div className="grid grid-rows-6 grid-cols-5 gap-1 justify-center mt-4">
      {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => {
        const guess = guesses[i] || "";
        const feedback = validatedRows[i] || [];

        return (
          <GridRow
            key={i}
            guess={guess}
            feedback={feedback}
            wordLength={WORD_LENGTH}
          />
        );
      })}
    </div>
  );
};
