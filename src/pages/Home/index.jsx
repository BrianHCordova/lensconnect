import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Welcome from '../../components/Welcome';
import { useLenis } from '@studio-freight/react-lenis';

const ParallaxZoomComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize lenis scroll effect
  useLenis();

  return (
    <div className="parallax-container">
      {/* Image container with parallax zoom effect */}
      <motion.div
        className="parallax-image"
        style={{
          scale: 1 + scrollY * 0.0005, // Adjust the scale factor as needed
          opacity: 1 - scrollY * 0.001, // Adjust the opacity factor as needed
        }}
      >
        <img src="/main.jpg" alt="Main" style={{ width: '100vw' }} />
      </motion.div>
      <div className="other-content">
      <Welcome />
      </div>
    </div>
  );
};

export default ParallaxZoomComponent;
