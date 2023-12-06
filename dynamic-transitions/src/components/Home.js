import React, { useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
// import Navigation from './Navigation';
import Typewriter from 'typewriter-effect';
import './Home.css'
import SportsSection from './SportsSection'; 

import image1 from './images/footballplayer.png';
import image2 from './images/basketball.png';
import image3 from './images/amfootball.png';

const Home = () => {
  const images = useMemo(() => [image1, image2, image3], []);


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialFadeIn, setInitialFadeIn] = useState(false);

  useEffect(() => {
    // GSAP Fade In for the home-body (only once)
    if (!initialFadeIn) {
      gsap.fromTo('.home-body', { opacity: 0 }, { opacity: 1, duration: 2.5 });
      setInitialFadeIn(true);
    }

    // GSAP Fade In for other elements
    gsap.fromTo('.home-fade-in', { opacity: 0 }, { opacity: 1, duration: 2.5 });
  }, [initialFadeIn]);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      // GSAP timeline for image transitions
      gsap.timeline()
        // Fade out the current image
        .to('.home-image', { opacity: 0, duration: 1 })
        // Change the image source
        .call(() => {
          const nextImageIndex = (currentImageIndex + 1) % images.length;
          document.querySelector('.home-image').src = images[nextImageIndex];
          setCurrentImageIndex(nextImageIndex);
        })
        // Fade in the new image
        .to('.home-image', { opacity: 1, duration: 1 });
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearInterval(imageTimer);
  }, [currentImageIndex, images]);

  return (
    <div className='home-body'>
      {/* <Navigation/> */}    
      <div className='title-page'>        
        <div className='home-title-container'>
          <h1 className='home-title'>The History Of </h1>
          <h1 className='home-typewriter-title'>
            <Typewriter
              options={{
                strings: ['Sports', 'Football', 'Basketball'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>

        <div className='home-image-container'>
            <img src={images[currentImageIndex]} alt='Sports' className='home-image' />
        </div>
      </div>  

      <div className='sports-sections'>
        <SportsSection backgroundImage='url("/path-to-background-image1.jpg")'>

        </SportsSection>

        <SportsSection backgroundImage='url("/path-to-background-image2.jpg")'>

        </SportsSection>

      </div>
    </div>

  
  );
};

export default Home;