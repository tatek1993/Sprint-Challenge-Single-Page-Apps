import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {useHistory} from "react-router-dom";

export default function SearchForm(props) {
 
  const [searchResults, setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState({name: ""});
  
  useEffect(() => {
    const results = props.data.filter(character => {
      console.log(searchTerm);

      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(results);
  }, [searchTerm]);

  const handleChanges = e => {
    setSearchTerm(e.target.value);
    // console.log("handle changes", searchTerm, {...searchTerm})
    // setSearchTerm({...searchTerm});
    
  };

  const submitForm = e => {
    e.preventDefault();
    setSearchResults(props.searchResults)
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
          value={searchTerm.name}
          onChange={handleChanges}
        />
        <button type="submit">Search</button>
     </form>
     <div className="characters-list">
       <ul>
         {searchResults.map(chara => (
           <li key={chara.name}>{chara.name}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}


