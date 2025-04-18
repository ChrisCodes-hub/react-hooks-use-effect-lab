import React, { useState,useEffect } from "react";

function Question({ question, onAnswered }) {
  const [intervalemaining, setintervalemaining] = useState(10);
  
  useEffect(()=>{
   const timer=setTimeout(()=>{
    if(intervalemaining===0){
      setintervalemaining(10)
      onAnswered(false)
    }
    else {
      setintervalemaining(intervalemaining-1)
    }
   },1000)
  return ()=>clearTimeout(timer)
  // add useEffect code
},[ intervalemaining,onAnswered])

  function handleAnswer(isCorrect) {
    setintervalemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{intervalemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
