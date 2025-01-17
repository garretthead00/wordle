import React from "react";
import { useWordle } from "../../context/WordleContext";

const Cell = ({ content, feedback }) => (
  <div
    className={`cell flex items-center justify-center border border-appPurple text-3xl sm:text-lg md:text-2xl font-tertiary w-20 sm:w-16 md:w-20 h-20 sm:h-16 md:h-20 text-appPurple ${
      feedback || "bg-appLightGray"
    }`}
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
    <div className={`grid grid-rows-${MAX_ATTEMPTS} grid-cols-${WORD_LENGTH} justify-center mt-4`}>
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
