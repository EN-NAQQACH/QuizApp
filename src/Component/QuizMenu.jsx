import { useContext, useState } from "react";
import React from "react";
import { QuizList } from "../ListQuestion/Question.jsx";
import { QuizContext } from '../Context/Context';

function QuizMenu() {
  const {score, setscore} = useContext(QuizContext);
  const [index, setindex] = useState(0);
  const [option, setoption] = useState("");
  const{game, setgame} = useContext(QuizContext)
  
  function nexquestion(){
    if(QuizList[index].ans == option){
      setscore((prev) => prev+1);
      setoption("")
    }
    setindex((prevques)=> prevques+1)
  }

  function finish(){
    setgame("EndQuiz")
    score == QuizList.length-1 ? setscore(score+1) : score
  }

  return (
    <div className="QuizMenu">
      <h2>{index+1}. {QuizList[index].qs}</h2>
      <div className="btncollection">
        <button onClick={() => setoption("a")}> {QuizList[index].op1}</button>
        <button onClick={() => setoption("b")}> {QuizList[index].op2}</button>
        <button onClick={() => setoption("c")}> {QuizList[index].op3}</button>
        <button onClick={() => setoption("d")}> {QuizList[index].op4}</button>
      </div>
        {index == QuizList.length-1 ?
        (<button onClick={finish}>Finish</button>) :
        <div className="nextbtn">
        <button onClick={nexquestion}>Next</button>
      </div>
      }
      

    </div>
  );
}

export default QuizMenu;
