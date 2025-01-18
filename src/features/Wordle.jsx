import React from "react";
import { GameBanner, Grid, Keyboard } from "./components";
import { GAME_STATUS } from "../helpers/constants";

import { useWordle, WordleProvider } from "../context/WordleContext";

const Wordle = () => {
  const { gameStatus } = useWordle();

  return (
    <WordleProvider>
      <div className="wordle-game flex flex-col items-center mt-10 min-w-[360px]">
        <h1 className="text-3xl font-bold mb-4 text-appDarkGold font-primary">
          Wordle Game
        </h1>
        <Grid />
        {gameStatus !== GAME_STATUS.PLAYING && <GameBanner />}
        <Keyboard />
      </div>
    </WordleProvider>
  );
};

export default Wordle;
