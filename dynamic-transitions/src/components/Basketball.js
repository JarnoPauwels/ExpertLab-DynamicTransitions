import React from 'react';
import Navigation from './Navigation';
import SportsSection from './SportsSection'; 
import './Basketball.css'
import { Reveal } from './Reveal';
import { motion, useScroll } from "framer-motion";

import image2 from './images/basketball.png';
import inventor from './images/basketball_inventor.jpg';
import firstgame from './images/Firstbasketballgame.jpg';
import college from './images/basketballcollege.jpg';
import nba from './images/nbalogo.jpg';

const Basketball = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className='page1-body'>
      <Navigation/>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <SportsSection classname="basketball-section">  
        <Reveal classname="section-reveal">
          <div className='basketball-title-container'>
            <h1 className='basketball-title'>The History Of Basketball</h1>
          </div>
          <img src={image2} alt='basketball player' className='basketball-img' />
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Invention of the game</h1>
              <p>The game of basketball as it is known today was created by Dr. James Naismith in December 1891 in Springfield, Massachusetts, to condition young athletes during cold months. Naismith was a physical education instructor at YMCA International Training School (now known as Springfield College) in Springfield, Massachusetts. Upon the request of his boss, Naismith was tasked to create an indoor sports game to help athletes keep in shape in cold weather. <br></br><br></br> It consisted of peach baskets and a soccer style ball. He published 13 rules for the new game. He divided his class of eighteen into two teams of nine players each and set about to teach them the basics of his new game. The objective of the game was to throw the basketball into the fruit baskets nailed to the lower railing of the gym balcony. Every time a point was scored, the game was halted so the janitor could bring out a ladder and retrieve the ball. After a while, the bottoms of the fruit baskets were removed. The first public basketball game was played in Springfield, Massachusetts, on March 11, 1892.</p>
            </div>
            <div className='invention-img-container'>
              <img src={inventor} alt='basketball player' className='invention-img' />
              <p className="inventor-text">Dr. James Naismith</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={firstgame} alt='basketball player' className='invention-img' />
              <p className="inventor-text">The first basketball court: Springfield College</p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>The first basketball game</h1>
              <p>On December 21, 1891, Naismith published rules for a new game using five basic ideas and thirteen rules. That day, he asked his class to play a match in the Armory Street court: 9 versus 9, using a soccer ball and two peach baskets. Frank Mahan, one of his students, wasn't so happy. He just said: "Harrumph. Another new game".[5] Someone proposed to call it "Naismith Game", but he suggested "We have a ball and a basket: why don’t we call it basketball?"[6] The eighteen players were John G. Thompson, Eugene S. Libby, Edwin P. Ruggles, William R. Chase, T. Duncan Patton, Frank Mahan, Finlay G. MacDonald, William H. Davis and Lyman Archibald, who defeated George Weller, Wilbert Carey, Ernest Hildner, Raymond Kaighn, Genzabaro Ishikawa, Benjamin S. French, Franklin Barnes, George Day and Henry Gelan 1–0.[7] The goal was scored by Chase.[8] There were other differences between Naismith's first idea and the game played today. The peach baskets were closed, and balls had to be retrieved manually, until a small hole was put in the bottom of the peach basket to poke the ball out using a stick. Only in 1906 were metal hoops, nets and backboards introduced. In 1894 the soccer ball was replaced by a ball Naismith contacted Spalding to make.</p>
            </div>

          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Basketball in American colleges</h1>
              <p>The greatest level of early basketball activity outside of YMCAs was seen in American colleges. The first known U.S. college to field a basketball team against an outside opponent was Vanderbilt University, which played against the local YMCA in Nashville, Tennessee, on February 7, 1893. The second recorded instance of an organized college basketball game was Geneva College's game against the New Brighton YMCA on April 8, 1893, in Beaver Falls, Pennsylvania, which Geneva won 3–0. <br></br><br></br>

              The first recorded game between two college teams occurred on February 9, 1895, when Hamline University faced Minnesota A&M (which later became a part of the University of Minnesota). Minnesota A&M won the game, which was played under rules allowing nine players per side, 9–3. The first intercollegiate match using the modern rule of five players per side is often credited as a game between the University of Chicago and the University of Iowa, in Iowa City, Iowa, on January 18, 1896. The Chicago team, which was organized by Amos Alonzo Stagg, who had learned the game from James Naismith at Springfield YMCA, won the game 15–12. (Some sources state the first "true" five-on-five intercollegiate match was a game in 1897 between Yale and Penn, because the Iowa team, that played Chicago in 1896, was composed of University of Iowa students, but did not officially represent the University of Iowa – rather being organized through a YMCA.) By 1900 the game of basketball had spread to colleges across the country . <br></br><br></br>

              By 1897 the U.S. Amateur Athletic Union (AAU) had taken over oversight of basketball activity from YMCA. In April 1905, representatives of fifteen colleges separately took over control of the college game, creating the collegiate "Basket Ball Rule Committee". The committee was in turn absorbed into the predecessor of the National Collegiate Athletic Association (NCAA) in 1909. The extremely popular NCAA men's basketball tournament was started in 1939.
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={college} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text">2019-20 Men's Basketball Roster - American University</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={nba} alt='basketball player' className='nba-img' />
              <p className="inventor-text">NBA Logo</p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>NBA</h1>
              <p>The Basketball Association of America (BAA) was founded on June 6, 1946, in New York City. The league adopted the name National Basketball Association (NBA) in 1949 after merging with the rival National Basketball League (NBL). As of the early 21st century, the NBA is the most significant professional basketball league in the world in terms of popularity, salaries, talent, and level of competition. The NBA's commissioner's name is Adam Silver and his job is to oversee the tasks in the organization. Many rule changes have occurred since the inception of professional basketball that has altered the game to what we now recognize today. These rule changes did not occur all at once but instead evolved to suit the changing style of play. Starting with the widening of the free-throw lane in 1951 and a further extension in 1964, this change was made to reduce the dominant impact of centers who played with their back facing the basket - otherwise known as Post Position. Then in 1954, the 24-second shot clock was introduced. This was done to increase the speed of the game, by forcing the team with the basketball to shoot the ball before the 24-second timer is up. Finally, the NBA introduced the three-point line, in the 1979–1980 season. This was done to spread out the players, which were predominantly playing underneath the basket at this time as well as add a further degree of difficulty to the game. <br></br><br></br>

              In the late 1950s and early 1960s, the influx of black athletes increased excitement and revitalized the NBA. By this time, the league was mainly composed of African American players, and most of the top stars were black. However, in the late 1970s, the popularity of the NBA was once again threatened by the decline in attendance and television ratings. In 1979, the NBA's TV audience declined by 18%. <br></br><br></br>

              In the 1980s, former university superstar Earvin "Magic" Johnson of Los Angeles and Larry Bird of Boston once changed the way the game was played. Despite both being 6 ft 9 in (2.06 m) Johnson and Bird could play many roles previously reserved for shorter players. They have been described as two of the 50 best players in NBA history. Just when the NBA needed a new force, Johnson and Bird gave the NBA a new big game to restore its low popularity. During and after that, some superstars entered the league, including Charles Barkley, Hakeem Olajuwon, David Robinson, and Michael Jordan. 
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>

    </div>
  );
};

export default Basketball;
