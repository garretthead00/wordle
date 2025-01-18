import React, { createContext, useCallback, useContext, useState } from "react";
import { GAME_STATUS, MAX_ATTEMPTS, WORD_LENGTH } from "../helpers/constants";
import { generateRandomWord } from "../helpers/wordGenerator";


export const WordleContext = createContext({});

export const WordleProvider = ({ children }) => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [validatedRows, setValidatedRows] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);
  const [validatedKeys, setValidatedKeys] = useState({
    misplacedKeys: [],
    correctKeys: [],
    incorrectKeys: [],
  });

  const [solution, setSolution] = useState('');

  const getFeedback = (guess) => {
    const feedback = Array(WORD_LENGTH).fill("");

    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === solution[i]) {
        feedback[i] = "#22c55e";
        setValidatedKeys((prevState) => ({
          ...prevState,
          correctKeys: [...prevState.correctKeys, guess[i]],
        }));
      } else if (solution.includes(guess[i])) {
        feedback[i] = "#eab308";
        setValidatedKeys((prevState) => ({
          ...prevState,
          misplacedKeys: [...prevState.misplacedKeys, guess[i]],
        }));
      } else {
        feedback[i] = "#9ca3af";
        setValidatedKeys((prevState) => ({
          ...prevState,
          incorrectKeys: [...prevState.incorrectKeys, guess[i]],
        }));
      }
    }
    return feedback;
  };

  const handleKeyPress = (key) => {
    if (key === "Enter" && currentGuess.length === WORD_LENGTH) {
      const newValidatedRow = getFeedback(currentGuess);
      setValidatedRows([...validatedRows, newValidatedRow]);
      setCurrentGuess("");
      updateGameStatus();
    } else if (key === "Delete" && currentGuess.length > 0) {
      guesses.splice(-1);
      const updatedGuess = currentGuess.slice(0, -1);
      setCurrentGuess(updatedGuess);
      if (updatedGuess.length > 0) {
        setGuesses([...guesses, updatedGuess]);
      }
    } else if (
      key.length === 1 &&
      currentGuess.length < WORD_LENGTH &&
      guesses.length <= MAX_ATTEMPTS
    ) {
      if (currentGuess.length > 0) {
        guesses.splice(-1);
      }
      const updatedGuess = currentGuess + key;
      setCurrentGuess(updatedGuess);
      setGuesses([...guesses, updatedGuess]);
    }
  };

  const updateGameStatus = useCallback(() => {
    if (guesses.length === MAX_ATTEMPTS) {
      setGameStatus(GAME_STATUS.LOST);
    } else {
      const lastFeedback = guesses[guesses.length - 1];
      if (lastFeedback && lastFeedback === solution) {
        setGameStatus(GAME_STATUS.WON);
      }
    }
  }, [guesses, solution]);

  const resetGame = () => {
    setSolution(generateRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setValidatedRows([]);
    setGameStatus(GAME_STATUS.PLAYING);
    setValidatedKeys({
      misplacedKeys: [],
      correctKeys: [],
      incorrectKeys: [],
    });
  };

  return (
    <WordleContext.Provider
      value={{
        validatedKeys,
        gameStatus,
        guesses,
        currentGuess,
        handleKeyPress,
        validatedRows,
        WORD_LENGTH,
        MAX_ATTEMPTS,
        setSolution,
        resetGame,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export const useWordle = () => useContext(WordleContext);
