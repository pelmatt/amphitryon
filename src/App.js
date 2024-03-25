import React, { useState, useEffect } from 'react';
import './App.css';
import StartScreen from './StartScreen';
import Creation from './Creation';
import dungeonMusic from './sound_effects/dungeon-music.mp3'

function App() {
  const [view, setView] = useState('start');
  const [transitionPhase, setTransitionPhase] = useState('none');
  const [apiKey, setApiKey] = useState(''); // State to store the API key

  const handleStart = (apiKey) => {
    setApiKey(apiKey); // Update the state with the API key
    setTransitionPhase('fadingOut');
  };

  useEffect(() => {
    let timeoutId = null;
    if (transitionPhase === 'fadingOut') {
      timeoutId = setTimeout(() => {
        setView('creation');
        setTransitionPhase('fadingIn');
      }, 1000);
    } else if (transitionPhase === 'fadingIn') {
      timeoutId = setTimeout(() => {
        setTransitionPhase('none');
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [transitionPhase]);

  useEffect(() => {
    const audio = new Audio(dungeonMusic);
    audio.loop = true;

    if (view === 'creation') {
      audio.play().catch(error => console.error(error));
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [view]);

  return (
    <div className={`App ${transitionPhase}`}>
      {view === 'start' && <StartScreen onStart={handleStart} />}
      {view === 'creation' && <Creation apiKey={apiKey} />} 
    </div>
  );
}

export default App;
