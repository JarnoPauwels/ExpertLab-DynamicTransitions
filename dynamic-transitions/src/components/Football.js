import React from 'react';
import Navigation from './Navigation';
import SportsSection from './SportsSection'; 
import './SportsPages.css'
import { Reveal } from './Reveal';
import { motion, useScroll } from "framer-motion";

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import footballplayer from './images/footballplayer.png';
import football1 from './images/Football/football1.jpg' 
import football2 from './images/Football/football2.jpg' 
import football3 from './images/Football/football3.png' 
import football4 from './images/Football/football4.jpg' 
import football5 from './images/Football/photofootball1.jpg' 
import football6 from './images/Football/photofootball2.jpg' 
import football7 from './images/Football/photofootball3.jpg' 
import football8 from './images/Football/photofootball4.jpg' 
import football9 from './images/Football/photofootball5.jpg' 

const Football = () => {
  const { scrollYProgress } = useScroll();

  const itemData = [
    {
      img: football1,
      title: 'Fern',
    },
    {
      img: football2,
      title: 'Mushrooms',
    },
    {
      img: football3,
      title: 'Tower',
    },
    {
      img: football4,
      title: 'Sea star',
    },
    {
      img: footballplayer,
      title: 'Snacks',
    },
    {
      img: football5,
      title: 'Honey',
    },
    {
      img: football6,
      title: 'Basketball',
    },
    {
      img: football7,
      title: 'Breakfast',
    },
    {
      img: football8,
      title: 'Tree',
    },
    {
      img: football9,
      title: 'Burger',
    },
  ];

  return (
    <div className='page1-body'>
      <Navigation/>

      <motion.div
        className="progress-bar-football"
        style={{ scaleX: scrollYProgress }}
      />

      <SportsSection classname="football-section">  
        <Reveal classname="section-reveal">
          <div className='basketball-title-container'>
            <h1 className='basketball-title'>The History Of Football</h1>
          </div>
          <img src={footballplayer} alt='basketball player' className='football-img' />
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>The game of football takes its form</h1>
              <p>The most admitted story tells that the game was developed in England in the 12th century. In this century, games that resembled football were played on meadows and roads in England. Besides from kicks, the game involved also punches of the ball with the fist. This early form of football was also much more rough and violent than the modern way of playing. <br></br><br></br>


              An important feature of the forerunners to football was that the games involved plenty of people and took place over large areas in towns (an equivalent was played in Florence from the 16th century where it was called Calcio). The rampage of these games would cause damage on the town and sometimes death to the participants. These would be among the reasons for the proclamations against the game that finally was forbidden for several centuries. But the football-like games would return to the streets of London in the 17th century. It would be forbidden again in 1835, but at this stage the game had been established in the public schools. <br></br><br></br>

              It took, however, long time until the features of today’s football had been taken into practice. For a long time there was no clear distinction between football and rugby. There were also many variations concerning the size of the ball, the number of players and the length of a match. <br></br><br></br>

              The game was often played in schools and two of the predominant schools were Rugby and Eton. At Rugby the rules included the possibility to take up the ball with the hands and the game we today know as rugby has its origin from here. At Eton on the other hand the ball was played exclusively with the feet and this game can be seen as a close predecessor to the modern football. The game in Rugby was called “the running game” while the game in Eton was called “the dribbling game”. <br></br><br></br>
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={football1} alt='basketball player' className='invention-img' />
              <p className="inventor-text"></p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={football2} alt='basketball player' className='invention-img' />
              <p className="inventor-text"></p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>The first football clubs</h1>
              <p>Football clubs have existed since the 15th century, but unorganized and without official status. It is therefore hard to decide which the first football club was. Some historians suggest that it was the Foot-Ball Club formed 1824 in Edinburgh. Early clubs were often formed by former school students and the first of this kind was formed in Sheffield in 1855. The oldest among professional football clubs is the English club Notts County that was formed in 1862 and still exists today. <br></br><br></br>


              An important step for the emergence of teams was the industrialization that led to larger groups of people meeting at places such as factories, pubs and churches. Football teams were established in the larger cities and the new railroads could bring them to other cities. <br></br><br></br>


              In the beginning, football was dominated by public school teams, but later, teams consisting by workers would make up the majority. Another change was successively taking place when some clubs became willing to pay the best players to join their team. This would be the start of a long period of transition, not without friction, in which the game would develop to a professional level. <br></br><br></br>
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>The great modern competitions</h1>
              <p>No other sport event besides the Summer Olympic Games can today measure itself with the FIFA World Cup. The first edition of the FIFA World Cup was played in 1930 in Uruguay and has since then returned every fourth year (with two exceptions due to the Second World War). In 1991 the first World Cup for women was held in China and has since then also returned every fourth year. <br></br><br></br>
              Today the biggest global tournament for clubs is the Champions League (played since 1992), the former European Cup (1955–1991).
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={football3} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text"></p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={football4} alt='basketball player' className='nba-img' />
              <p className="inventor-text"></p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>Globalization of the biggest sport in the world</h1>
              <p>In the late 19th century, only a few national football teams existed; England and Scotland had the first active teams that played games against each other in the 1870s. Today there are 211 national associations included in the Fédération Internationale de Football Association (FIFA), the world governing body of the sport. Another proof of the globalization could be seen in the increase of nations participating in the World Cup qualifiers: from 32 in 1934 to over 200 in 2014. <br></br><br></br>
              The world regions have been divided into six confederations: Confédération Africaine de Football (CAF), Asian Football Confederation (AFC), Union des Associations Européennes de Football (UEFA), The Confederation of North, Central America and Caribbean Association Football (CONCACAF), Oceania Football Confederation (OFC), and Confederación Sudamericana de Fútbol (CONMEBOL).
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>
      
      <a className="source-link" href="https://www.footballhistory.org">https://www.footballhistory.org</a>

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

export default Football;
