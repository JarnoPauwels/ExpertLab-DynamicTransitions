import React, { useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import Navigation from './Navigation';
import Typewriter from 'typewriter-effect';
import './Home.css'
import SportsSection from './SportsSection'; 
import HoverButton from './HoverButton';
import { Reveal } from './Reveal';

import image1 from './images/footballplayer.png';
import image2 from './images/basketball.png';
import image3 from './images/amfootball.png';
import image4 from './images/tennisplayer.png';

const Home = () => {
  const images = useMemo(() => [image1, image2, image3, image4], []);
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
        .to('.home-image', { opacity: 0, duration: 0.5 })
        // Change the image source
        .call(() => {
          const nextImageIndex = (currentImageIndex + 1) % images.length;
          document.querySelector('.home-image').src = images[nextImageIndex];
          setCurrentImageIndex(nextImageIndex);
        })
        // Fade in the new image
        .to('.home-image', { opacity: 1, duration: 0.5 });
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearInterval(imageTimer);
  }, [currentImageIndex, images]);

  return (
    <div className='home-body'>
      <Navigation/>    
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
        {/* Basketball */}
        <SportsSection classname="basketball-section">
          <Reveal classname="section-reveal">
            <div className='basketball-title-container'>
              <h1 className='basketball-title'>The History Of Basketball</h1>
              <HoverButton to="/the-history-of-basketball">Learn More</HoverButton> 
            </div>
            <img src={image2} alt='basketball player' className='basketball-img' />
          </Reveal>
        </SportsSection>

        {/* Football */}
        <SportsSection classname="football-section">
          <Reveal classname="section-reveal">
            <img src={image1} alt='football player' className='football-img' />
            <div className='football-title-container'>
              <h1 className='football-title'>The History Of Football</h1>
              <HoverButton to="/the-history-of-football">Learn More</HoverButton> 
            </div>
          </Reveal>
        </SportsSection>

        {/* American Football */}
        <SportsSection classname="american-football-section">
          <Reveal classname="section-reveal">
            <div className='american-football-title-container'>
              <h1 className='american-football-title'>The History Of American Football</h1>
              <HoverButton to="/the-history-of-american-football">Learn More</HoverButton> 
            </div>
            <img src={image3} alt='american-football player' className='american-football-img' />
          </Reveal>
        </SportsSection>

        {/* Tennis */}
        <SportsSection classname="tennis-section">
          <Reveal classname="section-reveal">
            <img src={image4} alt='tennis player' className='tennis-img' />
            <div className='tennis-title-container'>
              <h1 className='tennis-title'>The History Of Tennis</h1>
              <HoverButton to="/the-history-of-tennis">Learn More</HoverButton> 
            </div>
          </Reveal>
        </SportsSection>

      </div>
    </div>

  
  );
};

export default Home;