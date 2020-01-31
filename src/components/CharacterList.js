import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const ACLayout = styled.section `
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`



export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/")
      .then(res => {
        console.log("this is the res.data", res.data);
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <ACLayout className="character-list">
      {characters.map(c => {
        return (
          <CharacterCard
            key={c.id}
            name={c.name}
            gender={c.gender}
            species={c.species}
            image={c.image}
            />
        )
      })}
    </ACLayout>
  )
};

