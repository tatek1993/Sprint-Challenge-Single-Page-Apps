import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm";
import {useHistory} from "react-router-dom";

const ACLayout = styled.section `
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`


function SearchForm(props) {  
  const [searchTerm, setSearchTerm] = useState("");
  const handleChanges = e => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    // console.log("handle changes", searchTerm, {...searchTerm})
    // setSearchTerm({...searchTerm});
  };

  const submitForm = e => {
    e.preventDefault();
    props.setSearchTerm(searchTerm)
    // const useHistory = useHistory()
    // useHistory.push("/character")
  };

  return (
    <section className="search-form">
     <form onSubmit = {submitForm}>
     <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          name="name"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChanges}
        />
        <button type="submit">Search</button>
     </form>
    </section>
  );
}

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    console.log('characters: ', characters);
    const results = characters.filter(character => {
      
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(results);
  }, [searchTerm, characters]);

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
      <SearchForm setSearchTerm={setSearchTerm}/>
      <ACLayout className="character-list">
        {searchResults.map(c => {
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


