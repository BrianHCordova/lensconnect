import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Welcome from '../../components/Welcome';
import { useLenis } from '@studio-freight/react-lenis';
import PhotographerCard from '../../components/PhotographerCard';
import API from '../../utils/API';
import CreateAccountButton from '../../components/CreateAccountButton';
import './style.css'

const ParallaxZoomComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [photographers, setPhotographers] = useState([])
  const [featPro, setFeatPro] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!photographers) {
      return
    }
    API.getPhotographers().then((data) => {
      setPhotographers(data)
    })

    API.getFeatPro().then((data) => {
      setFeatPro(data)
      console.log(featPro)
    })

  }, [])

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
        <img src="/main.png" alt="Main" style={{ width: '100vw' }} />
      </motion.div>
      {/* Render CreateAccountButton component */}
      <CreateAccountButton />
      <div className="other-content">
        <Welcome />
        <div className=' w-3/4 mx-auto'>
          <h1 className='text-5xl feat-pro-text'>Featured Photographer</h1>
          <div className='featured-photographer'>
            <PhotographerCard
              username={featPro[0]?.username}
              bio={featPro[0]?.biography}
              userId={featPro[0]?.id}
              serveloc={featPro[0]?.ServeLocations}
              spec={featPro[0]?.Specialties}
            />
          </div>
        </div>
        <div className='container mx-auto'>
          {photographers?.map((photographer) => {
            return (
              <PhotographerCard
                key={photographer.id}
                username={photographer.username}
                bio={photographer.biography}
                userId={photographer.id}
                serveloc={photographer.ServeLocations}
                spec={photographer.Specialties}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ParallaxZoomComponent;

