import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({submitForm, elementChange, pokemonRecord}) {
  const {name,hp,front,back} = pokemonRecord;
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={submitForm}>
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            onChange={elementChange}
            value={name}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            onChange={elementChange}
            value={hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={elementChange}
            value={front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={elementChange}
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
