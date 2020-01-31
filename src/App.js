import React from "react";
import Header from "./components/Header.js";
import {Link, Switch, Route} from "react-router-dom";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";

const MainStyling = styled.div `
  background-color: greenyellow;
`

export default function App() {
  return (
    <MainStyling>
      <Header />
      <Switch>
      <Route path="/character/:characterID">
        <CharacterCard />
      </Route>

      <Route path="/character"> 
        <CharacterList />
      </Route>

      <Route path="/search">
        <SearchForm characters={[]}/>
      </Route>

      <Route path="/">
        <WelcomePage />
      </Route>

    </Switch>
    </MainStyling>
  );
}
