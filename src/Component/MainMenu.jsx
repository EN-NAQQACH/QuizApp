import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../Context/Context';

function MainMenu() {
  const{game, setgame} = useContext(QuizContext)
  return (
    <div>
        <button onClick={() => {setgame("QuizMenu")}}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;