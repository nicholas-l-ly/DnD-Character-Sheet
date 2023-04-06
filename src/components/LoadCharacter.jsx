import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SpellList from './SpellList';
import LevelContainer from './LevelContainer';
import Spell from './Spell';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
    // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const LoadCharacter = () => {
  const [name, nameOnChange ] = useInput('');
  const [level, levelOnChange] = useState('0');// level: Number,
  const [classtype, classtypeOnChange] = useState('');// class: String,
  const [race, raceOnChange] = useState('0');  // race: String,
  const [total_hp, total_hpOnChange] = useState('0');   // total_hp: Number,
  const [current_hp, current_hpOnChange] = useState('0');   // current_hp: Number,
  const [strength,strengthOnChange] = useState('0');    // strength: Number,
  const [dexterity,dexterityOnChange] = useState('0');     // dexterity: Number,
  const [constitution, constitutionOnChange] = useState('0');    // constitution: Number,
  const [intelligence, intelligenceOnChange] = useState('0');   // intelligence: Number,
  const [wisdom, wisdomOnChange] = useState('0');   // wisdom: Number,
  const [charisma, charismaOnChange] = useState('0');    // charisma: Number,
  const [speed, speedOnChange] = useState('0');// speed: Number,
  const [initiative, initiativeOnChange] = useState('0'); // initiative: Number,
  const [armor_class, armor_classOnChange] = useState('0');




  const loadCharacter = () =>{

    fetch(`/load/${name}`, {
      method:'GET',
    }).then(res => res.json())
      .then(data =>{
        const {
          name,
          level,
          classtype,
          race,
          total_hp,
          current_hp,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
          speed,
          initiative,
          armor_class} = data;

        classtypeOnChange(classtype);
        levelOnChange(level);
        raceOnChange(race);
        total_hpOnChange(total_hp);
        current_hpOnChange(current_hp);
        strengthOnChange(strength);
        dexterityOnChange(dexterity);
        constitutionOnChange(constitution);
        intelligenceOnChange(intelligence);
        wisdomOnChange(wisdom);
        charismaOnChange(charisma);
        speedOnChange(speed);
        initiativeOnChange(initiative);
        wisdomOnChange(wisdom);
        armor_classOnChange(armor_class);
      });
    // add a catch 
  };
  const body = {
    name,
    level,
    classtype,
    race,
    total_hp,
    current_hp,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    speed,
    initiative,
    armor_class
  };
  
  const saveCharacter = () => {
    fetch(`/save/${name}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    }).then((res) => res.json())
      .then((data )=> {
        console.log(data);
      })
      .catch(err => console.log('UpdateCharacter fetch ERROR: ',err));
    
  };


  return(
    <section className='mainSection LoadCharContainer'>
        
      <h2>Load Character</h2>
      <article>
        <h3>Enter your character name</h3>
        <div className="createCharFields">
          <label htmlFor="name">Name: </label>
          <input name="name" placeholder="Your Character name" value={name} onChange={nameOnChange} />
        </div>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
                Cancel
          </button>
        </Link>
        <button type="button" className="btnMain" onClick={loadCharacter}>Load</button>
        <button type="button" className="btnMain" onClick={saveCharacter}>Save</button>
        <div className="charHeadContainer">
          <h3 className="charName">{name}</h3>
        </div>
        <ul>
          <li>class: {classtype}</li>
          <li>race: {race}</li>
          <li>level: {level} <button onClick={()=>levelOnChange(level + 1)}>+</button></li>
          <li>total_hp: {total_hp} <button onClick={()=>total_hpOnChange(total_hp + 1)}>+</button></li>
          <li>current_hp: {current_hp} <button onClick={()=>current_hpOnChange(current_hp + 1)}>+</button></li>
          <li>strength: {strength} <button onClick={()=>strengthOnChange(strength + 1)}>+</button></li>
          <li>dexterity: {dexterity} <button onClick={()=>dexterityOnChange(dexterity + 1)}>+</button></li>
          <li>constitution: {constitution}<button onClick={()=>constitutionOnChange(constitution + 1)}>+</button></li>
          <li>intelligence: {intelligence}<button onClick={()=>intelligenceOnChange(intelligence + 1)}>+</button></li>
          <li>wisdom: {wisdom}<button onClick={()=>wisdomOnChange(wisdom + 1)}>+</button></li>
          <li>charisma: {charisma}<button onClick={()=>charismaOnChange(charisma + 1)}>+</button></li>
          <li>speed: {speed} <button onClick={()=>speedOnChange(speed + 1)}>+</button></li>
          <li>initiative: {initiative}<button onClick={()=>initiativeOnChange(initiative + 1)}>+</button></li>
          <li>armor_class: {armor_class} <button onClick={()=>armor_classOnChange(armor_class + 1)}>+</button></li>
        </ul>
        <div>

          <SpellList
            classtype ={classtype}
            level = {level}
          />

        </div>
      </article>
    </section>
  );
};

export default withRouter(LoadCharacter);