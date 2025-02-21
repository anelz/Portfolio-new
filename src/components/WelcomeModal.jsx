import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion"


function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentOpacity = 1;
      const fadeOutInterval = setInterval(() => {
        currentOpacity -= 0.1;
        setOpacity(currentOpacity);
        if (currentOpacity <= 0) {
          clearInterval(fadeOutInterval);
          setIsVisible(false);
        }
      }, 200); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{ opacity }}
      className="fixed inset-0 bg-black flex justify-center items-center z-50 transition-opacity duration-300"
    >
      <motion.div
      initial={{opacity:0, rotateX:"90deg"}}
      whileInView={{opacity:1, rotateX:0}}
      transition={{duration:2}}
      className="text-white text-center">
        <h2 className="text-5xl text-gray-500 ">Welcome to my website</h2>
      </motion.div>
    </div>
  );
}

export default WelcomeModal;