import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const {id,hp,name,sprites} = pokemon;
  const {front,back} = sprites;
  const [sprite, setSprite] = useState(front);

  function spriteChange(){
    (sprite === front) ? setSprite(back) : setSprite(front);
  }

  return (
    <Card onClick={spriteChange}>
      <div>
        <div className="image">
          <img src={sprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
