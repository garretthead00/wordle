import React from "react";
import { GAME_STATUS } from "../../helpers/constants";
import { useWordle } from "../../context/WordleContext";

export const GameBanner = () => {
  const { gameStatus, solution, resetGame } = useWordle();
  return (
    <>
      {gameStatus === GAME_STATUS.WON && (
        <div className="game-banner flex flex-col gap-2 justify-center items-center mt-4 text-appGold font-primary text-xl p-4 text-center">
          <button className="closeButton absolute top-2 right-2">X</button>
          {gameStatus === GAME_STATUS.WON
            ? `Congratulations! You guessed the word!`
            : `Game Over! The word was ${solution}.`}
          <button
            className="play-again-button button border bg-appGold text-appPurple text-2xl p-2 rounded-md"
            onClick={() => resetGame()}
          >
            Play Again?
          </button>
        </div>
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <p className="game-banner flex justify-center items-center mt-2 text-appGold font-primary text-xl p-4 text-center">
          {`Game Over! The word was ${solution}.`}
        </p>
      )}
    </>
  );
};
