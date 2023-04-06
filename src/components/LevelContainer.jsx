import React, {useState} from 'react';
import Spell from './Spell';

function LevelContainer({spellLevel,slots}){

    
  const spell = [];

  for (let i = 0; i < slots; i++){
    spell.push(<Spell/>);
    console.log('spell:');

  }


  return(
    <section>
      <h1>Spells: {spellLevel}</h1>
      <div>{spell}</div>
    </section>
  );
}

export default LevelContainer;