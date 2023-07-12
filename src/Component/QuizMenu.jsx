import { useState } from "react";
import React from "react";
import { QuizList } from "../ListQuestion/Question.jsx";

function QuizMenu() {
  const [index, setindex] = useState(0);
  const [option, setoption] = useState("");
  
  function nexquestion(){
    setindex((prevques)=> prevques+1)
  }

  return (
    <div className="QuizMenu">
      <h2>{QuizList[index].qs}</h2>
      <div className="btncollection">
        <button onClick={() => setoption("a")}> {QuizList[index].op1}</button>
        <button onClick={() => setoption("b")}> {QuizList[index].op2}</button>
        <button onClick={() => setoption("c")}> {QuizList[index].op3}</button>
        <button onClick={() => setoption("d")}> {QuizList[index].op4}</button>
      </div>

      <div className="nextbtn">
        <button onClick={nexquestion}>Next</button>
      </div>
      
    </div>
  );
}

export default QuizMenu;
