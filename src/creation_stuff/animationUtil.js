import { useState, useEffect } from 'react';

const useAnimation = (trigger, { fadeInDuration = 1000, fadeOutDuration = 1000 } = {}) => {
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    // Apply the fade-in effect and clean it after the animation ends
    setAnimationClass('fade-in');
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, fadeInDuration);

    return () => clearTimeout(timer);
  }, [trigger, fadeInDuration]);

  const startFadeOut = (callback) => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      callback?.();
    }, fadeOutDuration);
  };

  return [animationClass, startFadeOut];
};

export default useAnimation;
