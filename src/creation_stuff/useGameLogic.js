import { useState, useEffect } from 'react';
import { questions } from './questions';

const useGameLogic = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [creationOver, setCreationOver] = useState(false);
  
    const goToNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setCreationOver(true);
      }
    };
    
    return {
      currentQuestionIndex,
      responses,
      creationOver,
      goToNextQuestion,
      setResponses,
      questions,
    };
  };

export default useGameLogic;
