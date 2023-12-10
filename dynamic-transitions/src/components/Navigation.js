// Navigation.js
import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBasketballBall, faFutbol, faFootball, faBaseball } from '@fortawesome/free-solid-svg-icons';
import './NavigationStyles.css';
import styled from 'styled-components';

const Nav = styled.nav``;
const Ul = styled.ul``;
const Li = styled.li``;
const LinkStyled = styled(Link)``;

const Navigation = () => {
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    navigate(to);
    window.scrollTo(0, 0); 
  };

  return (
    <Nav>
      <Ul>
        <Li>
          <LinkStyled to="/" onClick={() => handleLinkClick('/')} className="home">
            <FontAwesomeIcon icon={faHome} />
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/the-history-of-basketball" onClick={() => handleLinkClick('/the-history-of-basketball')} className="basketball">
            <FontAwesomeIcon icon={faBasketballBall} />
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/the-history-of-football" onClick={() => handleLinkClick('/the-history-of-football')} className="football">
            <FontAwesomeIcon icon={faFutbol} />
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/the-history-of-american-football" onClick={() => handleLinkClick('/the-history-of-american-football')} className="american-football">
            <FontAwesomeIcon icon={faFootball} />
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/the-history-of-tennis" onClick={() => handleLinkClick('/the-history-of-tennis')} className="tennis">
            <FontAwesomeIcon icon={faBaseball} />
          </LinkStyled>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
