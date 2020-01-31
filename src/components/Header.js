import React from "react";
import {Link, Switch, Route} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-links">
        <Link className="welcomepage-link" to="/">
          Home
        </Link>
        <Link to="/character-list">
          Characters
        </Link>
      </div>
    </header>

   
  );
}
