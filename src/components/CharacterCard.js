import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div `
  width:350px;
  padding: 10px;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: green;
  color: greenyellow;
  word-wrap: wrap;
  text-align: center;
  text-shadow: 2px 2px black;
  border-radius: 20px;
`
const CharacterImg = styled.img `
  margin: 20px;
  border: 5px solid greenyellow;
  border-radius: 20px;
`

const CharacterCard = props => {
  // console.log("this is charactercard props", props);
  return (
    <CharacterDiv className="aboutCharacter">
      <h2>Name: {props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <CharacterImg src={props.image} alt={props.name}/>
    </CharacterDiv>
  );
}




export default CharacterCard;