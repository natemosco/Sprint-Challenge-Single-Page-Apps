import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom"
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header/>
      <Route exact path="/" component={CharacterList}/>
      <Route exact path"/charactercard/:id" render={(props) => <CharacterCard }
    </main>
  );
}
