import React, {useEffect, useState} from 'react';


function Spell ({spellLevel,classtype}) {
  const [spellOptions,setSpellOptions] = useState([]);


  useEffect( ()=> {
    fetch(`https://www.dnd5eapi.co/api/classes/${classtype}/levels/${spellLevel}/spells`,
      {
        method:'GET'
      }).then(res => res.json())
      .then(data => {
        const optionHolder = [];

        // data is an object, results is the property with value
        // as an array of spells, results = data.results to make things simpler
        const results = data.results;
        console.log(results.name);

        results.forEach(el => optionHolder.push(el.name));
        setSpellOptions(optionHolder);
      });
  });

  const spellChoices = spellOptions.map((spell,idx)=>{
    return <option key ={idx} value={idx}>{spell}</option>;
  });


  return(

    <section>
      <span>Spell:  </span> 
      <span><select name='spell-picker'>
        <option>Pick a spell</option>
        {spellChoices} </select></span>
    </section>
  );
}

export default Spell;