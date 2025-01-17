import React from "react";
import { GameBanner, Grid, Keyboard } from "./components";
import { GAME_STATUS } from "../helpers/constants";

import { WordleProvider } from "../context/WordleContext";

const Wordle = () => (
  <WordleProvider>
    <div className="wordle-game flex flex-col items-center mt-10 min-w-[360px]">
      <h1 className="text-3xl font-bold mb-4 text-appDarkGold font-primary">
        Wordle Game
      </h1>
      <Grid />
      <Keyboard />
      {/* <GameBanner /> */}
    </div>
  </WordleProvider>
);

export default Wordle;
