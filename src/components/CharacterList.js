import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledListItem = styled.section`
  min-height : 80vh;
  height:auto;
  width: 100vw;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  background: "https://wallpapercave.com/wp/wp1822724.jpg" no-repeat 100%/cover;
  .list-item{
    width: 45%;
    height:450px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      console.log(response)
      setCharacters(response.data.results)
    }
    )
    .catch(error=>
      console.log("axios request failed",error))
  }, []);


  const CharacterListing = characters.map(character => 
    <div classname="list-item">
      <img src={character.image} alt="Image of ${character.name} from the tv show Rick and Morty"/>
      <h2>{character.name}</h2>
    </div>
  )
  
  return (
    <section className="character-list">
      <StyledListItem>{CharacterListing}</StyledListItem>
    </section>
  );
}
