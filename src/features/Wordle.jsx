import React, { useCallback, useEffect } from "react";
import { GameBanner, Grid, Keyboard } from "./components";
import { GAME_STATUS } from "../helpers/constants";
import { generateRandomWord } from "../helpers/wordGenerator";
import { useWordle } from "../context/WordleContext";

const Wordle = () => {
  const { gameStatus, setSolution } = useWordle();

  useEffect(() => {
    const targetWord = generateRandomWord();
    setSolution(targetWord);
  }, [setSolution]);

  useCallback(() => {
    if (gameStatus) {
      console.log("gameStatus: ", gameStatus);
    }
  }, [gameStatus]);

  return (
    <div className="wordle-game flex flex-col items-center mt-10 min-w-[360px]">
      <h1 className="text-3xl font-bold mb-4 text-appDarkGold font-primary">
        Wordle Game
      </h1>
      <Grid />
      {gameStatus !== GAME_STATUS.PLAYING && <GameBanner />}
      <Keyboard />
    </div>
  );
};

export default Wordle;
