import React from 'react';
import Navigation from './Navigation';
import SportsSection from './SportsSection'; 
import './SportsPages.css'
import { Reveal } from './Reveal';
import { motion, useScroll } from "framer-motion";

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import footballplayer from './images/amfootball.png';
import football1 from './images/AmFootball/amfootball1.jpg' 
import football2 from './images/AmFootball/amfootball2.jpg' 
import football3 from './images/AmFootball/amfootball3.jpg' 
import football4 from './images/AmFootball/amfootball4.jpg' 
import football5 from './images/AmFootball/amfootball5.png' 
import football6 from './images/AmFootball/photoamfootball1.jpg' 
import football7 from './images/AmFootball/photoamfootball2.jpg' 
import football8 from './images/AmFootball/photoamfootball3.jpg' 
import football9 from './images/AmFootball/photoamfootball4.jpg' 
import football10 from './images/AmFootball/photoamfootball5.jpg' 

const AmericanFootball = () => {
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
      img: football5,
      title: 'Sea star',
    },
    {
      img: footballplayer,
      title: 'Snacks',
    },
    {
      img: football6,
      title: 'Honey',
    },
    {
      img: football7,
      title: 'Basketball',
    },
    {
      img: football8,
      title: 'Breakfast',
    },
    {
      img: football9,
      title: 'Tree',
    },
    {
      img: football10,
      title: 'Burger',
    },
  ];

  return (
    <div className='page1-body'>
      <Navigation/>

      <motion.div
        className="progress-bar-american-football"
        style={{ scaleX: scrollYProgress }}
      />

      <SportsSection classname="american-football-section">  
        <Reveal classname="section-reveal">
          <div className='basketball-title-container'>
            <h1 className='american-football-title'>The History Of American Football</h1>
          </div>
          <img src={footballplayer} alt='basketball player' className='football-img' />
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Early history</h1>
              <p>American football evolved from the sports of rugby and soccer. Rugby, like American football, is a sport in which two competing teams vie for control of a ball, which can be kicked through a set of goalposts or run into the opponent's goal area to score points. <br></br><br></br>
              What is considered to be the first American football game was played on November 6, 1869, between Rutgers and Princeton, two college teams. They consisted of 25 players per team and used a round ball that could not be picked up or carried. It could, however, be kicked or batted with the feet, hands, head or sides, with the objective being to advance it into the opponent's goal. Rutgers won the game 6–4. Collegiate play continued for several years with matches played using the rules of the host school. Representatives of Yale, Columbia, Princeton and Rutgers met on October 19, 1873, to create a standard set of rules for use by all schools. Teams were set at 20 players each, and fields of 400 by 250 feet (122 m × 76 m) were specified. Harvard abstained from the conference, as they favored a rugby-style game that allowed running with the ball. After playing McGill University using both American (known as "the Boston game") for the first game and Canadian (rugby) rules for the second one, the Harvard players preferred the Canadian style of having only 11 men on the field, running the ball without having to be chased by an opponent, the forward pass, tackling, and using an oblong instead of a round ball. 
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={football1} alt='basketball player' className='invention-img' />
              <p className="inventor-text">Walter Camp, the "Father of American Football", in 1878 when Camp was captain of Yale University's football team</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={football2} alt='basketball player' className='american-football2-img' />
              <p className="inventor-text">The dangers associated with the sport depicted in a 1908 cartoon by William Charles Morris</p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>Evolution of the game</h1>
              <p>An 1875 Harvard–Yale game played under rugby-style rules was observed by two Princeton athletes who were impressed by it. They introduced the sport to Princeton, a feat the Professional Football Researchers Association compared to "selling refrigerators to Eskimos". Princeton, Harvard, Yale, and Columbia then agreed to intercollegiate play using a form of rugby union rules with a modified scoring system. These schools formed the Intercollegiate Football Association, although Yale did not join until 1879. Yale player Walter Camp, now regarded as the "Father of American Football", secured rule changes in 1880 that reduced the size of each team from 15 to 11 players and instituted the snap to replace the chaotic and inconsistent scrum. While the game between Rutgers and Princeton is commonly considered the first American football game, several years prior in 1862, the Oneida Football Club formed as the oldest known football club in the United States. The team consisted of graduates of Boston's elite preparatory schools and played from 1862 to 1865. <br></br><br></br>  
              The introduction of the snap resulted in an unexpected consequence. Before the snap, the strategy had been to punt if a scrum resulted in bad field position. However, a group of Princeton players realized that as the snap was uncontested, they could now hold the ball indefinitely to prevent their opponent from scoring. In 1881, in a game between Yale and Princeton, both teams used this strategy to maintain their undefeated records. Each team held the ball, gaining no ground, for an entire half, resulting in a 0–0 tie. This "block game" proved extremely unpopular with both teams' spectators and fans. 
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Evolution of the game</h1>
              <p>A rule change was necessary to prevent this strategy from taking hold, and a reversion to the scrum was considered. However, Camp successfully proposed a rule in 1882 that limited each team to three downs, or tackles, to advance the ball 5 yards (4.6 m). Failure to advance the ball the required distance within those three downs would result in control of the ball being forfeited to the other team. This change effectively made American football a separate sport from rugby, and the resulting five-yard lines added to the field to measure distances made it resemble a gridiron in appearance. Other major rule changes included a reduction of the field size to 110 by 53+1⁄3 yards (100.6 m × 48.8 m) and the adoption of a scoring system that awarded four points for a touchdown, two for a safety and a goal following a touchdown, and five for a goal from the field. Additionally, tackling below the waist was legalized,[13] and a static line of scrimmage was instituted. <br></br><br></br>  
              Despite these new rules, football remained a violent sport. Dangerous mass-formations like the flying wedge resulted in serious injuries and deaths. A 1905 peak of 19 fatalities nationwide resulted in a threat by President Theodore Roosevelt to abolish the game unless major changes were made. In response, 62 colleges and universities met in New York City to discuss rule changes on December 28, 1905. These proceedings resulted in the formation of the Intercollegiate Athletic Association of the United States, later renamed the National Collegiate Athletic Association (NCAA). <br></br><br></br>  
              The legal forward pass was introduced in 1906, although its effect was initially minimal due to the restrictions placed on its use. The idea of a 40-yard-wider field was opposed by Harvard due to the size of the new Harvard Stadium. Other rule changes introduced that year included the reduction of playing time from 70 to 60 minutes and an increase of the distance required for a first down from 5 to 10 yards (4.6 to 9.1 m). To reduce infighting and dirty play between teams, the neutral zone was created along the width of the football before the snap. Scoring was also adjusted: points awarded for field goals were reduced to three in 1909 and points for touchdowns were raised to six in 1912. Also in 1912, the field was shortened to 100 yards (91 m) long, two 10-yard-long (9.1 m) end zones were created, and teams were given four downs instead of three to advance the ball 10 yards (9.1 m). The roughing the passer penalty was implemented in 1914, and eligible players were first allowed to catch the ball anywhere on the field in 1918. 
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={football3} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text">1900 Football Team</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>  
            <div className='first-game-img-container'>
              <img src={football4} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text">Pudge Heffelfinger, widely regarded as the first professional football player</p>
            </div>

            <div className='first-game-text-container'>
              <h1 className='invention-title'>Professional era</h1>
              <p>On November 12, 1892, Pudge Heffelfinger was paid $500 (equivalent to $16,285 in 2022) to play a game for the Allegheny Athletic Association in a match against the Pittsburgh Athletic Club. This is the first recorded instance of a player being paid to participate in a game of American football, although many athletic clubs in the 1880s offered indirect benefits, such as helping players attain employment, giving out trophies or watches that players could pawn for money, or paying double in expense money. Despite these extra benefits, the game had a strict sense of amateurism at the time, and direct payment to players was frowned upon, if not prohibited outright. <br></br><br></br>  
              Over time, professional play became increasingly common, and with it came rising salaries and unpredictable player movement, as well as the illegal payment of college players who were still in school. The National Football League (NFL), a group of professional teams that was originally established in 1920 as the American Professional Football Association, aimed to solve these problems. This new league's stated goals included an end to bidding wars over players, prevention of the use of college players, and abolition of the practice of paying players to leave another team. By 1922, the NFL had established itself as America's premier professional football league. <br></br><br></br>  
              The dominant form of football at the time was played at the collegiate level. The upstart NFL received a boost to its legitimacy in 1925, however, when an NFL team, the Pottsville Maroons, defeated a team of Notre Dame all-stars in an exhibition game. A greater emphasis on the passing game helped professional football to distinguish itself further from the college game during the late 1930s. Football, in general, became increasingly popular following the 1958 NFL Championship game, a match between the Baltimore Colts and the New York Giants that is still referred to as the "Greatest Game Ever Played". The game, a 23–17 overtime victory by the Colts, was seen by millions of television viewers and had a major influence on the popularity of the sport. This, along with the innovations introduced by the new American Football League (AFL) in the early 1960s, helped football to become the most popular sport in the United States by the mid-1960s. 
              </p>
            </div>

          </div>
        </Reveal>
      </SportsSection>
      
      <SportsSection classname="invention-section">  
        <Reveal classname="section-reveal">
          <div className='invention-section-container'>            
            <div className='invention-text-container'>
              <h1 className='invention-title'>Professional era</h1>
              <p>The rival AFL arose in 1960 and challenged the NFL's dominance. The AFL began in relative obscurity but eventually thrived, with an initial television contract with the ABC television network. The AFL's existence forced the conservative NFL to expand to Dallas and Minnesota in an attempt to destroy the new league. Meanwhile, the AFL introduced many new features to professional football in the United States: official time was kept on a scoreboard clock rather than on a watch in the referee's pocket, as the NFL did; optional two-point conversions by pass or run after touchdowns; names on the jerseys of players; and several others, including expansion of the role of minority players, actively recruited by the league in contrast to the NFL. The AFL also signed several star college players who had also been drafted by NFL teams. Competition for players heated up in 1965, when the AFL New York Jets signed rookie Joe Namath to a then-record $437,000 contract (equivalent to $3.11 million in 2022). A five-year, $40 million NBC television contract followed, which helped to sustain the young league. The bidding war for players ended in 1966 when NFL owners approached the AFL regarding a merger, and the two leagues agreed on one that took full effect in 1970. This agreement provided for a common draft that would take place each year, and it instituted an annual World Championship game to be played between the champions of each league. This championship game began play at the end of the 1966 season. Once the merger was completed, it was no longer a championship game between two leagues and reverted to the NFL championship game, which came to be known as the Super Bowl. <br></br><br></br>  
              College football maintained a tradition of postseason bowl games. Each bowl game was associated with a particular conference and earning a spot in a bowl game was the reward for winning a conference. This arrangement was profitable, but it tended to prevent the two top-ranked teams from meeting in a true national championship game, as they would normally be committed to the bowl games of their respective conferences. Several systems have been used since 1992 to determine a national champion of college football. The first was the Bowl Coalition, in place from 1992 to 1994. This was replaced in 1995 by the Bowl Alliance, which gave way in 1997 to the Bowl Championship Series (BCS). The BCS arrangement proved to be controversial, and was replaced in 2014 by the College Football Playoff (CFP). 
              </p>
            </div>
            <div className='invention-img-container'>
              <img src={football5} alt='basketball player' className='basketballcoll-img' />
              <p className="inventor-text">NFL Logo</p>
            </div>
          </div>
        </Reveal>
      </SportsSection>

      <a className="source-link" href="https://en.wikipedia.org/wiki/American_football#History">https://en.wikipedia.org/wiki/American_football#History</a>

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

export default AmericanFootball;
