import React, {useState} from 'react';
import Spell from './Spell';

function LevelContainer({spellLevel,slots,classtype,spellLevelName}){

    
  const spell = [];

  for (let i = 0; i < slots; i++){
    spell.push(<Spell
      spellLevel = {spellLevel}
      classtype = {classtype}
    />);
    // console.log('spell:');

  }


  return(
    <section>
      <div>Spells: {spellLevelName}</div>
      <div>{spell}</div>
    </section>
  );
}

export default LevelContainer;