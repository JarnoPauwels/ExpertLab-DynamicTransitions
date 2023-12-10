import React from 'react';
import Navigation from './Navigation';
import SportsSection from './SportsSection'; 
import './SportsPages.css'
import { Reveal } from './Reveal';
import { motion, useScroll } from "framer-motion";

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import tennisplayer from './images/tennisplayer.png';
import tennis1 from './images/Tennis/tennis1.jpg' 
import tennis2 from './images/Tennis/tennis2.jpeg' 
import tennis3 from './images/Tennis/tennis3.jpg' 
import tennis4 from './images/Tennis/tennis4.jpg' 
import tennis5 from './images/Tennis/phototennis1.jpg' 
import tennis6 from './images/Tennis/phototennis2.jpg' 
import tennis7 from './images/Tennis/phototennis3.jpg' 
import tennis8 from './images/Tennis/phototennis4.jpg' 
import tennis9 from './images/Tennis/phototennis5.jpg' 

const Tennis = () => {
  const { scrollYProgress } = useScroll();

  const itemData = [
    {
      img: tennis1,
      title: 'Fern',
    },
    {
      img: tennis2,
      title: 'Mushrooms',
    },
    {
      img: tennis3,
      title: 'Tower',
    },
    {
      img: tennis4,
      title: 'Sea star',
    },
    {
      img: tennisplayer,
      title: 'Snacks',
    },
    {
      img: tennis5,
      title: 'Honey',
    },
    {
      img: tennis6,
      title: 'Basketball',
    },
    {
      img: tennis7,
      title: 'Breakfast',
    },
    {
      img: tennis8,
      title: 'Tree',
    },
    {
      img: tennis9,
      title: 'Burger',
    },
  ];

  return (
    <div className='page1-body'>
      <Navigation/>

      <motion.div
        className="progress-bar-tennis"
        style={{ scaleX: scrollYProgress }}
      />

      <SportsSection classname="tennis-section">  
        <Reveal classname="section-reveal">
          <div className='basketball-title-container'>
            <h1 className='basketball-title'>The History Of Tennis</h1>
          </div>
          <img src={tennisplayer} alt='basketball player' className='tennis-img' />
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Origin of the modern game</h1>
              <p>Between 1859 and 1865, Harry Gem, a solicitor, and his friend Augurio Perera developed a game that combined elements of racquets and the Basque ball game pelota, which they played on Perera's croquet lawn in Birmingham, England. In 1872, along with two local doctors, they founded the world's first tennis club on Avenue Road, Leamington Spa.[24] This is where "lawn tennis" was used as the name of an activity by a club for the first time. <br></br><br></br>

              In Tennis: A Cultural History, Heiner Gillmeister reveals that on 8 December 1874, British army officer Walter Clopton Wingfield wrote to Harry Gem, commenting that he (Wingfield) had been experimenting with his version of lawn tennis "for a year and a half". In December 1873, Wingfield designed and patented a game which he called sphairistikè (Greek: σφαιριστική, meaning "ball-playing"), and which was soon known simply as "sticky" – for the amusement of guests at a garden party on his friend's estate of Nantclwyd Hall, in Llanelidan, Wales. According to R. D. C. Evans, turfgrass agronomist, "Sports historians all agree that [Wingfield] deserves much of the credit for the development of modern tennis." According to Honor Godfrey, museum curator at Wimbledon, Wingfield "popularized this game enormously. He produced a boxed set which included a net, poles, rackets, balls for playing the game – and most importantly you had his rules. He was absolutely terrific at marketing and he sent his game all over the world. He had very good connections with the clergy, the law profession, and the aristocracy and he sent thousands of sets out in the first year or so, in 1874." The world's oldest annual tennis tournament took place at Leamington Lawn Tennis Club in Birmingham in 1874. This was three years before the All England Lawn Tennis and Croquet Club would hold its first championships at Wimbledon, in 1877. The first Championships culminated in a significant debate on how to standardise the rules. 
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={tennis1} alt='basketball player' className='invention-img' />
              <p className="inventor-text">Jeu de paume in the 17th century</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={tennis2} alt='basketball player' className='invention-img' />
              <p className="inventor-text">Lawn tennis in the US, 1887</p>
            </div>

            <div className='first-game-text-container'>
              {/* <h1 className='invention-title'>The first basketball game</h1> */}
              <p>In the United States in 1874, Mary Ewing Outerbridge, a young socialite, returned from Bermuda with a sphairistikè set. She became fascinated by the game of tennis after watching British army officers play. She laid out a tennis court at the Staten Island Cricket Club at Camp Washington, Tompkinsville, Staten Island, New York. The first American National championship was played there in September 1880. An Englishman named O.E. Woodhouse won the singles title, and a silver cup worth $100, by defeating Canadian I. F. Hellmuth. There was also a doubles match which was won by a local pair. There were different rules at each club. The ball in Boston was larger than the one normally used in New York. <br></br><br></br>

              On 21 May 1881, the oldest nationwide tennis organization in the world was formed, the United States National Lawn Tennis Association (now the United States Tennis Association) in order to standardize the rules and organize competitions. The US National Men's Singles Championship, now the US Open, was first held in 1881 at the Newport Casino, Newport, Rhode Island. The US National Women's Singles Championships were first held in 1887 in Philadelphia. 
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              {/* <h1 className='invention-title'>Basketball in American colleges</h1> */}
              <p>In 1913, the International Lawn Tennis Federation (ILTF), now the International Tennis Federation (ITF), was founded and established three official tournaments as the major championships of the day. The World Grass Court Championships were awarded to Great Britain. The World Hard Court Championships were awarded to France; the term "hard court" was used for clay courts at the time. Some tournaments were held in Belgium instead. And the World Covered Court Championships for indoor courts were awarded annually; Sweden, France, Great Britain, Denmark, Switzerland and Spain each hosted the tournament. At a meeting held on 16 March 1923 in Paris, the title "World Championship" was dropped and a new category of "Official Championship" was created for events in Great Britain, France, the US and Australia  – today's Grand Slam events. The impact on the four recipient nations to replace the "world championships" with "official championships" was simple in a general sense: each became a major nation of the federation with enhanced voting power, and each now operated a major event. <br></br><br></br>
              The comprehensive rules promulgated in 1924 by the ILTF have remained largely stable in the ensuing 80 years, the one major change being the addition of the tiebreak system designed by Jimmy Van Alen. That same year, tennis withdrew from the Olympics after the 1924 Games, but returned 60 years later as a 21-and-under demonstration event in 1984. This reinstatement was credited by the efforts of then ITF president Philippe Chatrier, ITF general secretary David Gray and ITF vice president Pablo Llorens, with support from International Olympic Committee president Juan Antonio Samaranch. The success of the event was overwhelming, and the IOC decided to reintroduce tennis as a full-medal sport at Seoul in 1988. 
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={tennis3} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text">Tennis doubles final at 1896 Olympic Games</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={tennis4} alt='basketball player' className='nba-img' />
              <p className="inventor-text">Lawn tennis in Canada, c. 1900</p>
            </div>

            <div className='first-game-text-container'>
              {/* <h1 className='invention-title'>NBA</h1> */}
              <p>The Davis Cup, an annual competition between men's national teams, dates to 1900. The analogous competition for women's national teams, the Fed Cup, was founded as the Federation Cup in 1963 to celebrate the 50th anniversary of the founding of the ITF. <br></br><br></br>
              In 1926, promoter C. C. Pyle established the first professional tennis tour with a group of American and French tennis players playing exhibition matches to paying audiences. The most notable of these early professionals were the American Vinnie Richards and the Frenchwoman Suzanne Lenglen. Players turned pro, would no longer permitted to compete in the major (amateur) tournaments. <br></br><br></br>
              In 1968, commercial pressures and rumours of some amateurs taking money under the table led to the abandonment of this distinction, inaugurating the Open Era, in which all players could compete in all tournaments, and top players were able to make their living from tennis. With the beginning of the Open Era, the establishment of an international professional tennis circuit, and revenues from the sale of television rights, tennis's popularity has spread worldwide, and the sport has shed its middle-class English-speaking image
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>
      
      <a className="source-link" href="https://en.wikipedia.org/wiki/Tennis">https://en.wikipedia.org/wiki/Tennis</a>

      <Box sx={{ width: 1600, minHeight: 829 }}>
        <h1 className='invention-title'>Photos</h1>
        <Masonry columns={3} spacing={2}>
          {itemData.map((item, index) => (
            <div key={index}>
            <Reveal>          
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
          </Reveal>
            </div>
          ))}
        </Masonry>
      </Box>

    </div>
  );
};

export default Tennis;
