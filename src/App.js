import React from "react";
import Header from "./components/Header.js";
import {Link, Switch, Route} from "react-router-dom";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
      <Route path="/character-list/:characterID">
        <CharacterCard />
      </Route>
    </Switch>
    </main>
  );
}
