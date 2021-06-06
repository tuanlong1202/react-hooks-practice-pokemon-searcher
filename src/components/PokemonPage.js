import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const newFormData = {
    name: "",
    hp: 0,
    front: "",
    back: ""
  }
  const [formData, setFormData] = useState(newFormData);

  useEffect(loadData,[]);
  function loadData(){
    let url="http://localhost:3001/pokemon";
    fetch(url)
      .then((r)=>r.json())
      .then((data)=>{
        console.log(data);
        setPokemons([...data]);
      })
      .catch((e)=>{
        console.error("Error: " + e);
      })
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleElementChange(event) {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value,
    })
  }

  function validate(event) {
    if (formData.name === "") {
      alert("Pokemon's must be exist !");
      event.target.name.focus();
      return false;
    }
    if (formData.hp === "") {
      alert("Pokemon's HP must be exist !");
      event.target.hp.focus();
      return false;
    }
    if (formData.front === "") {
      alert("Pokemon's front image is inneeded !");
      event.target.front.focus();
      return false;
    }
    if (formData.back === "") {
      alert("Pokemon's back image is inneeded !");
      event.target.back.focus();
      return false;
    }
    return true;
  }

  function addPokemon(){
    let newRecord = {
      name: formData.name,
      hp: formData.hp,
      sprites:{
        front:formData.front,
        back:formData.back
      }
    }
    let url = "http://localhost:3001/pokemon";
    fetch (url,{
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newRecord)
    })
      .then(r=>r.json())
      .then(loadData)
      .catch(e=>console.error("Error: " + e));
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (validate(event)) {
      //add Pokemon
      addPokemon();
      //reset Form
      setFormData(newFormData);
    }
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        submitForm={handleSubmitForm}
        elementChange={handleElementChange}
        pokemonRecord={formData}
      />
      <br />
      <Search change={handleSearchChange} />
      <br />
      <PokemonCollection
        pokemonCollection={pokemons.filter(item=>(item.name.indexOf(searchTerm)>=0))}
      />
    </Container>
  );
}

export default PokemonPage;
