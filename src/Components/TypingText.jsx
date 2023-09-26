// TypingText.js
import React, { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState(1); // 1 for forward, -1 for reverse

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingDirection === 1) {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setTypingDirection(-1); // Reverse direction
        }
      } else if (typingDirection === -1) {
        if (currentIndex > 1) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setTypingDirection(1); // Forward direction, but keep the first letter
        }
      }
    }, 150); // Adjust the typing speed by changing the interval

    return () => {
      clearInterval(typingInterval); // Cleanup when the component unmounts
    };
  }, [currentIndex, text, typingDirection]);

  return <span>{displayText}</span>;
};

export default TypingText;
