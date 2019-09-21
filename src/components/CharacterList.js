import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header"

const StyledSearchBar= styled.div`
  width:100%;
  height:auto;
  display: flex;
  flex-direction: column;
  label{
    font-size: 20px;
    color: #b5800f;
    font-weight: 900;
    font-family: cursive;
    letter-spacing: 17px;
  }
  input{
    width:60%;
    background-color: #0006;
    color: white;
    #search::placeholder {
      color: #1ed02a;
      font-weight: 900;
      font-size: medium;
      letter-spacing: 1px;
      padding-left: 5px;
  }
`;
const StyledListItem = styled.section`
  min-height : 80vh;
  height:auto;
  width: 100%;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  background: url("https://wallpapercave.com/wp/wp1822724.jpg") no-repeat 100%/cover fixed;
  .list-item{
    width: 45%;
    height:450px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  h2{
    color: #15d029;
    background-color: #337081e3;
    text-align:center;
  }
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState([])
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      console.log(response)
      setCharacters(response.data.results)
      setQuery(response.data.results)
    }
    )
    .catch(error=>
      console.log("axios request failed",error))
  }, []);

  const handleChange= (event) =>{
    let inputString = event.target.value.toLowerCase()
    let filteredCharacters = characters.filter(eachCharacter=>eachCharacter.name.toLowerCase().includes(inputString))
    setQuery(filteredCharacters);
  }
  const CharacterListing = query.map(character => 
    <div classname="list-item">
      <img src={character.image} alt="Image of ${character.name} from the tv show Rick and Morty"/>
      <h2>{character.name}</h2>
    </div>
  )
  
  return (
    <>
    <section className="character-list">
      <StyledSearchBar>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" placeholder= "Choose Your Character" onChange={handleChange}></input>
      </StyledSearchBar>
        <StyledListItem>{CharacterListing}</StyledListItem>
    </section>
    </>
  )
}
