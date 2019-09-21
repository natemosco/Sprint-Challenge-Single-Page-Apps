import React from "react";
import {Route} from "react-router-dom"

import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
     
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characterlist" component={CharacterList}/>
      
    </main>
  );
}
