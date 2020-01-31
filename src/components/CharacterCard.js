import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div `
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: green;
  color: white;
`

const CharacterCard = props => {
  console.log("this is charactercard props", props);
  return (
    <CharacterDiv className="aboutCharacter">
      <h2>Character Name: {props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <img src={props.image}/>
    </CharacterDiv>
  )
}




export default function CharacterCard() {
  return <span>todo: character</span>;
}
