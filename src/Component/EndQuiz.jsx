import React from 'react';
import { QuizContext } from '../Context/Context';
import { useContext, useState } from "react";


function EndQuiz() {
  const {score, setscore} = useContext(QuizContext);
  return (
    <div>
      <h2 className='h2'>Score</h2>
      <div className='score'>{score}</div>
    </div>
  );
}

export default EndQuiz;