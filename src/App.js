import "./App.css";
import { WordleGame } from "./features/WordleV2";
import Wordle from "./features/Wordle";
import { WordleProvider } from "./context/WordleContext.js";

function App() {
  return (
    <div className="App contianer">
      <Wordle />
      {/* <WordleGame /> */}
    </div>
  );
}

export default App;
