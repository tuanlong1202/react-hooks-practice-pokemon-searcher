import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCollection}) {

  const pokemonToDisplay = pokemonCollection.map((item,index)=>{
    return (
      <PokemonCard key={index} pokemon={item} />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
