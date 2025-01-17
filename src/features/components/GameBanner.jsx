import React from "react";
import { GAME_STATUS, TARGET_WORD } from "../../helpers/constants";
import { useWordle } from "../../context/WordleContext";

export const GameBanner = () => {
  const { gameStatus } = useWordle();
  return (
    <>
      {gameStatus === GAME_STATUS.WON && <p>Congratulations! You guessed the word!</p>}
      {gameStatus === GAME_STATUS.LOST && <p>Game Over! The word was {TARGET_WORD}.</p>}
    </>
  );
};
