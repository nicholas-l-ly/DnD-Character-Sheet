import React, {useEffect, useState} from 'react';

import LevelContainer from './LevelContainer';


// https://www.dnd5eapi.co/api/classes/${classtype}/levels/${level}
// `https://www.dnd5eapi.co/api/classes/${classtype}/levels/${level}`
function SpellList ({classtype,level}) {
//   const spellList = [];
  const [spellList, setSpellList] = useState([]);

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
        const spellHolder = [];
        let spellLevel = 0;
        for (const key in data.spellcasting){
          if (data.spellcasting[key] > 0){
            // console.log(data.spellcasting);
            spellHolder.push(
              <LevelContainer
                spellLevelName = {key}
                slots = {data.spellcasting[key]}
                classtype = {classtype}
                spellLevel = {spellLevel}
              />
            );
          }
          spellLevel++;
        }
        setSpellList(spellHolder);
      });

  },[{}]);


  return(
    <article>
      <h1>Spell List</h1>
      
      {spellList}

    </article>
  );
}

export default SpellList;