import React, { useState, useEffect } from 'react';
import './Creation.css';
import { questions } from './creation_stuff/questions';
import useGameLogic from './creation_stuff/useGameLogic';
import useAnimation from './creation_stuff/animationUtil'; // Adjust the path based on your file structure


const Creation = () => {
  const [userInput, setUserInput] = useState('');
  const {
    currentQuestionIndex,
    gameOver,
    goToNextQuestion,
    setResponses,
    responses
  } = useGameLogic();

  const [animationClass, startFadeOut] = useAnimation(currentQuestionIndex);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      startFadeOut(() => {
        setResponses({
          ...responses,
          [questions[currentQuestionIndex].id]: userInput.trim(),
        });
        setUserInput('');
        goToNextQuestion();
      });
    }
  };

  return (
    <div className="creation-view">
      <video autoPlay loop muted className="background-video">
        <source src="orb-room-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!gameOver ? (
        <div>
          <p id="question-text" className={`question-text vt323-regular ${animationClass}`}>
            {questions[currentQuestionIndex].text}
          </p>
          <textarea
            className="user-input"
            placeholder="Write something..."
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          ></textarea>
        </div>
      ) : (
        // Consider rendering more informative content or actions on game over
        <p className="game-over-text">Game Over. Check the console for responses.</p>
      )}
    </div>
  );
};

export default Creation;
