// apiUtil.js
const apiCall = async (apiKey, endpoint) => {
    // Simulate an API call
    return new Promise((resolve) => setTimeout(() => resolve(`${endpoint} completed`), 1000));
  };
  
  export const makeApiCalls = async (apiKey,responses, updateProgressCallback) => {
    const tasks = [
      { endpoint: 'generate-story', progressKey: 'storyGenerated' },
      { endpoint: 'generate-characters', progressKey: 'charactersGenerated' },
      { endpoint: 'generate-resource-bars', progressKey: 'resourceBarsGenerated' },
      { endpoint: 'generate-cards', progressKey: 'cardsGenerated' },
    ];
  
    // Map each task to an API call function that returns a promise
    const taskPromises = tasks.map(task =>
      apiCall(apiKey, task.endpoint).then(() => updateProgressCallback(task.progressKey))
    );
  
    // Wait for all API calls to complete
    await Promise.all(taskPromises);
  };
  