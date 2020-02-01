import React, {useState} from "react";
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import styled from "styled-components";

const HeaderMainStyle = styled.header `
  color: turquoise;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 3px 3px green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeaderMainStyle>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderMainStyle>
    </section>
  );
}
