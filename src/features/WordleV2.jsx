import React, { useState, createContext, useContext } from 'react';

const WordleContext = createContext();

const useWordle = () => {
  return useContext(WordleContext);
};

const WordleProvider = ({ children }) => {
  const WORD_LENGTH = 5;
  const MAX_ATTEMPTS = 6;
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [solution] = useState("REACT"); // Example solution word
  const [validatedRows, setValidatedRows] = useState([]);

  const getFeedback = (guess) => {
    const feedback = Array(WORD_LENGTH).fill("");
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === solution[i]) {
        feedback[i] = "bg-green-500";
      } else if (solution.includes(guess[i])) {
        feedback[i] = "bg-yellow-500";
      } else {
        feedback[i] = "bg-gray-400";
      }
    }
    return feedback;
  };

  const handleKeyPress = (key) => {
    if (key === "Enter" && currentGuess.length === WORD_LENGTH) {
      const newValidatedRow = getFeedback(currentGuess);
      setGuesses([...guesses, currentGuess]);
      setValidatedRows([...validatedRows, newValidatedRow]);
      setCurrentGuess("");
    } else if (key === "Delete") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (key.length === 1 && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(currentGuess + key);
    }
  };

  return (
    <WordleContext.Provider
      value={{ guesses, currentGuess, handleKeyPress, validatedRows, WORD_LENGTH, MAX_ATTEMPTS }}
    >
      {children}
    </WordleContext.Provider>
  );
};

const Key = ({ keyLabel }) => {
  const { handleKeyPress } = useWordle();
  const isSpecialKey = keyLabel === "Enter" || keyLabel === "Delete";
  return (
    <button
      className={`key px-4 py-2 rounded font-bold text-white bg-gray-700 hover:bg-gray-600 ${
        isSpecialKey ? "w-20" : "w-12"
      }`}
      onClick={() => handleKeyPress(keyLabel)}
    >
      {keyLabel}
    </button>
  );
};

const KeyboardRow = ({ keys }) => (
  <div className="keyboard-row flex gap-1">
    {keys.map((key) => (
      <Key key={key} keyLabel={key} />
    ))}
  </div>
);

const QwertyKeyboard = () => {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"]
  ];

  return (
    <div className="keyboard flex flex-col gap-2 items-center mt-4">
      {keys.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex} keys={row} />
      ))}
    </div>
  );
};

const Cell = ({ content, feedback }) => (
  <div
    className={`cell flex items-center justify-center border border-gray-400 text-lg font-bold ${
      feedback || "bg-white"
    }`}
    style={{ width: "64px", height: "64px" }}
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

const Grid = () => {
  const { guesses, validatedRows, WORD_LENGTH, MAX_ATTEMPTS } = useWordle();

  return (
    <div className="grid grid-rows-6 grid-cols-5 gap-1 justify-center mt-4">
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

const WordleGame = () => (
  <WordleProvider>
    <div className="wordle-game flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Wordle Game</h1>
      <Grid />
      <QwertyKeyboard />
    </div>
  </WordleProvider>
);

export { QwertyKeyboard, Grid, WordleGame };
