import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Welcome from "../../components/Welcome";
import { useLenis } from "@studio-freight/react-lenis";
import PhotographerCard from "../../components/PhotographerCard";
import API from "../../utils/API";
import Lamp from "../../components/Lamp";

const ParallaxZoomComponent = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [photographers, setPhotographers] = useState([]);
  const [featPro, setFeatPro] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    
    if (!photographers) {
      return;
    }
    API.getPhotographers().then((data) => {
      setPhotographers(data);
    });
    if (!props.userId) {
      return
    }
    if (!featPro) {
      return
    }
    API.getFeatPro().then((data) => {
      console.log(data)
      setFeatPro(data);
      console.log(featPro);
    });
  }, [props.userId]);

  // Initialize lenis scroll effect on the page
  useLenis();

  // Define a less aggressive scaling factor, the higher the value, the more aggressive the zoom effect
  const scale = 1 + scrollY * 0.0003;

  return (
    <div className="parallax-container relative overflow-hidden ">
      {/* Image container with parallax zoom effect */}
      <motion.div
        className="parallax-image"
        style={{
          scale: scale,
          opacity: 1 - scrollY * 0.001, // Adjust the opacity value to control the fade effect, the higher the value, the faster the fade
        }}
      >
        <img src="/main.png" alt="Main" style={{ width: "100vw" }} />
      </motion.div>

      <Welcome />
      <div className="other-content relative">
        <div className="inset-0 flex items-center justify-center">
          <Lamp userId={props.userId}/>
        </div>
        <div className="">
          <div className="featured-photographer">
            {/* {featPro.map((pro)=> (<>{pro.id}</>))} */}
          {/* <PhotographerCard
                key={featPro[0]?.id}
                username={featPro[0]?.username}
                bio={featPro[0]?.biography}
                userId={featPro[0]?.id}
                serveloc={featPro[0]?.ServeLocations}
                spec={featPro[0]?.Specialties}
              /> */}
            
          </div>
        </div>
      </div>

      <div className="container mx-auto">
      
        {photographers?.map((photographer) => {
          return <PhotographerCard
              key={photographer.id}
              username={photographer.username}
              bio={photographer.biography}
              userId={photographer.id}
              serveloc={photographer.ServeLocations}
              spec={photographer.Specialties}
            />
          ;
        })}
      </div>
    </div>
  );
};

export default ParallaxZoomComponent;
