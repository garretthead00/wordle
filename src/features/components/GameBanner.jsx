import React from "react";
import { GAME_STATUS } from "../../helpers/constants";
import { useWordle } from "../../context/WordleContext";

export const GameBanner = () => {
  const { gameStatus, solution } = useWordle();
  return (
    <>
      {gameStatus === GAME_STATUS.WON && (
        <p className="game-banner flex justify-center items-center mt-4 text-appGold font-primary text-xl p-2 text-center">
          Congratulations! You guessed the word!
        </p>
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <p className="game-banner flex justify-center items-center mt-2 text-appGold font-primary text-xl">
          {`Game Over! The word was ${solution}.`}
        </p>
      )}
    </>
  );
};

export const GameBannerV2 = () => {
  const { gameStatus, solution, resetGame } = useWordle();

  return (
    <div className="game-banner flex flex-col justify-center items-center mt-2 text-appGold font-primary text-xl absolute align-middle border border-appDarkPurple top-28 min-w-[360px] max-w-[428px] h-[528px] bg-appPurple p-4">
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
  );
};
