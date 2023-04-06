import React, {useEffect, useState} from 'react';

import LevelContainer from './LevelContainer';


// https://www.dnd5eapi.co/api/classes/${classtype}/levels/${level}
// `https://www.dnd5eapi.co/api/classes/${classtype}/levels/${level}`
function SpellList ({classtype,level}) {
  const spellList = [];
    

  // create a fetch request that will map an array of spell slots
  useEffect(()=>{
    fetch(`https://www.dnd5eapi.co/api/classes/${classtype}/levels/${level}`,
      {
        method:'GET'
      }
    ).then(res => res.json())
      .then(data => {
      // console.log(data.spellcasting);
      // console.log(data.spellcasting.cantrips_known);
    
        for (const key in data.spellcasting){
          if (data.spellcasting[key] > 0){
            console.log(data.spellcasting);
            spellList.push(
              <LevelContainer
                spellLevel = {key}
                slots = {data.spellcasting[key]}
              />
                
            );
          }

        }
      });

  },[{}]);
  console.log(spellList);

  return(
    <section>
      <h1>Spell List</h1>
      
      {spellList}

    </section>
  );
}

export default SpellList;