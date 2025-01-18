import React from "react";
import { GAME_STATUS } from "../../helpers/constants";
import { useWordle } from "../../context/WordleContext";

export const GameBanner = () => {
  const { gameStatus, solution, resetGame } = useWordle();
  return (
    <div className="flex flex-col justify-center container">
      {gameStatus === GAME_STATUS.WON && (
        <div className="game-banner flex flex-col gap-2 justify-center items-center mt-4 text-appGold font-primary text-xl p-4 text-center">
          {`Congratulations! You guessed the word!`}
        </div>
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <div className="game-banner flex flex-col gap-2 justify-center items-center mt-4 text-appGold font-primary text-xl p-4 text-center">
          {`Sorry, Game Over!`}
        </div>
      )}
      <button
        className="play-again-button button border bg-appGold text-appPurple text-2xl p-2 rounded-md"
        onClick={() => resetGame()}
      >
        Play Again?
      </button>
    </div>
  );
};
