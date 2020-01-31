import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import {useHistory} from "react-router-dom";

const ACLayout = styled.section `
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
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
    <div>
      <SearchForm data={characters} />
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
    </div>
  )
};


