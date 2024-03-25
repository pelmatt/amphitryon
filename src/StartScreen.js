import React, { useState } from 'react';
import './StartScreen.css'; // Your CSS file path
import clickSound from './sound_effects/click-sound.mp3'; // Ensure you have this audio file

function StartScreen({ onStart }) {
  const [isActive, setIsActive] = useState(false);
  const [apiKey, setApiKey] = useState(''); // State to hold the API key input value

  const handleClick = () => {
    setIsActive(true);
    const audio = new Audio(clickSound);
    audio.play();

    onStart(apiKey); // Modified to pass the API key when starting the game

    // Optionally reset isActive after a short delay
    setTimeout(() => {
      setIsActive(false);
    }, 200); // Adjust time as needed
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value); // Update the API key state with the input value
  };

  return (

    <div className="StartScreen">
        
      <button
        className={`StartButton ${isActive ? 'Active' : ''}`}
        onClick={handleClick}
      >
        Start Game
      </button>
      <input
        type="text"
        className="ApiKeyInput" // Add a suitable class for styling
        placeholder="API Key"
        value={apiKey}
        onChange={handleApiKeyChange} // Update the state on input change
      />
      
    </div>
  );
}

export default StartScreen;
