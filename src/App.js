import React from "react";
import Header from "./components/Header.js";
import {Link, Switch, Route} from "react-router-dom";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
      <Route path="/character/:characterID">
        <CharacterCard />
      </Route>

      <Route path="/character"> 
        <CharacterList />
      </Route>

      <Route path="/">
        <CharacterList />
      </Route>

    </Switch>
    </main>
  );
}
