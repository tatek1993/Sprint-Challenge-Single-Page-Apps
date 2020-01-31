import React from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.h1 `
  color: turquoise;
  font-weight: bold;
  font-size: 4rem;
  text-shadow: 3px 3px green;
`

const NavStyling = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
`

export default function Header() {
  return (
    <header className="ui centered">
      <HeaderStyle className="ui center">Rick &amp; Morty Fan Page</HeaderStyle>
      <NavStyling className="nav-links">
        <NavLink className="welcomepage-link" to="/">
          Home
        </NavLink>
        <NavLink to="/character">
          Characters
        </NavLink>
        <NavLink to="/search">
          Search
        </NavLink>
      </NavStyling>
    </header>

   
  );
}
