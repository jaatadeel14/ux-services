// TypingText.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500); // Delay between text changes

    return () => clearTimeout(timer);
  }, [currentIndex, texts.length]);

  return (
    <motion.span
      className="text-gray-400 transition-transform animate-in duration-500 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={texts[currentIndex]}
    >
      {texts[currentIndex]}
    </motion.span>
  );
};

export default TypingText;