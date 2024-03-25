import { useState, useEffect } from 'react';
import { questions } from './questions';

const useGameLogic = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [gameOver, setGameOver] = useState(false);
  
    const goToNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
      }
    };
    
    return {
      currentQuestionIndex,
      responses,
      gameOver,
      goToNextQuestion,
      setResponses,
      questions,
    };
  };

export default useGameLogic;
