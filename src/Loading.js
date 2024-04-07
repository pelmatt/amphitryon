import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; // Assuming this is your ProgressBar component
import './Loading.css';
import { makeApiCalls } from './apiUtil.js'; // Assuming this is your utility for API calls

const Loading = ({ responses, apiKey }) => {
  const [loadingProgress, setLoadingProgress] = useState({
    storyGenerated: false,
    charactersGenerated: false,
    resourceBarsGenerated: false,
    cardsGenerated: false,
  });

  useEffect(() => {
    // Make sure to pass responses along with apiKey
    const initiateApiCalls = async () => {
      await makeApiCalls(apiKey, responses, updateProgress);
    };

    initiateApiCalls();
  }, [apiKey, responses]);

  // Function to update progress
  const updateProgress = (taskName) => {
    setLoadingProgress((prevProgress) => ({
      ...prevProgress,
      [taskName]: true,
    }));
  };

  return (
    <div className="loading-container">
      {/* Other loading UI elements */}
      <ProgressBar label="Generating Story" completed={loadingProgress.storyGenerated} />
      <ProgressBar label="Generating Characters" completed={loadingProgress.charactersGenerated} />
      <ProgressBar label="Generating Resource Bars" completed={loadingProgress.resourceBarsGenerated} />
      <ProgressBar label="Generating Cards" completed={loadingProgress.cardsGenerated} />
    </div>
  );
};

export default Loading;
