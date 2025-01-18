import "./App.css";
import Wordle from "./features/Wordle.jsx";
import { WordleProvider } from "./context/WordleContext.js";

const App = () => {
  return (
    <WordleProvider>
      <div className="App contianer bg-site bg-no-repeat bg-cover overflow-hidden h-svh">
        <Wordle />
      </div>
    </WordleProvider>
  );
}

export default App;
