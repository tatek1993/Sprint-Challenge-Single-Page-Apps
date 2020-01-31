import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState({name: ""});

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character =>
      props.characters.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
  }, [searchTerm]);

  const handleChanges = e => {
    // setSearchTerm(e.target.value);
    setSearchTerm({...searchTerm});
  };

  const submitForm = e => {
    e.preventDefault();
    setSearchResults(props.data)
  };

  return (
    <section className="search-form">
     <form onSubmit = {submitForm}>
     <label htmlFor="search">Search:</label>
        <input
          id="searc"
          type="text"
          name="name"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChanges}
        />
     </form>
     <div className="characters-list">
       <ul>
         {searchResults.map(chara => (
           <li key={chara}>{chara}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}


