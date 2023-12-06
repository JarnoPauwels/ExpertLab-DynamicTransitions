// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationStyles.css'; // Import the CSS file
import styled from 'styled-components';

const Nav = styled.nav``;
const Ul = styled.ul``;
const Li = styled.li``;
const LinkStyled = styled(Link)``;

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <LinkStyled to="/">Home</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/page1">Page 1</LinkStyled>
        </Li>
        <Li>
          <LinkStyled to="/page2">Page 2</LinkStyled>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
