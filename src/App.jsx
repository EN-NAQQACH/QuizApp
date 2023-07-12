import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainMenu from "./Component/MainMenu";
import QuizMenu from "./Component/QuizMenu";
import EndQuiz from "./Component/EndQuiz";
import { QuizContext } from "./Context/Context";

function App() {
  const [game, setgame] = useState("Menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{game, setgame}}>
        {game === "Menu" && <MainMenu />}
        {game === "QuizMenu" && <QuizMenu />}
        {game === "EndQuiz" && <EndQuiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
