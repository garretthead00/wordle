import React, { useEffect } from "react";
import { GameBanner, Grid, Keyboard } from "./components";
import { GAME_STATUS } from "../helpers/constants";
import { generateRandomWord } from "../helpers/wordGenerator";
import { useWordle } from "../context/WordleContext";
import { MotionComponent } from "../components/MotionComponent";


const Wordle = () => {
  const { gameStatus, setSolution } = useWordle();

  useEffect(() => {
    const targetWord = generateRandomWord();
    console.log('targetWord', targetWord)
    setSolution(targetWord);
  }, [setSolution]);

  return (
    <div className="wordle-game flex flex-col mt-4 items-center min-w-[360px]">
      <h1 className="text-3xl font-bold m-1 text-appDarkGold font-primary">
        Wordle Game
      </h1>
      <Grid />
      {gameStatus === GAME_STATUS.PLAYING && (
        <MotionComponent
          gameStatus={gameStatus}
          Component={Keyboard}
          isVisible={true}
        />
      )}
      {gameStatus !== GAME_STATUS.PLAYING && (
        <MotionComponent
          gameStatus={gameStatus}
          Component={GameBanner}
          isVisible={true}
        />
      )}
    </div>
  );
};

export default Wordle;
