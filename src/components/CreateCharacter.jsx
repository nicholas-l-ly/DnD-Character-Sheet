import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// need to require data for use in character creation

// create custom hook to handle onchange handlers
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
    // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

// create component and use useInput to handle input as state
function CreateCharacter () {

  const [name, nameOnChange ] = useInput('');// name: String,
  const [level, levelOnChange] = useInput('');// level: Number,
  const [classtype, classtypeOnChange] = useInput('');// class: String,
  const [race, raceOnChange] = useInput('');  // race: String,
  const [total_hp, total_hpOnChange] = useInput('');   // total_hp: Number,
  const [current_hp, current_hpOnChange] = useInput('');   // current_hp: Number,
  const [strength,strengthOnChange] = useInput('');    // strength: Number,
  const [dexterity,dexterityOnChange] = useInput('');     // dexterity: Number,
  const [constitution, constitutionOnChange] = useInput('');    // constitution: Number,
  const [intelligence, intelligenceOnChange] = useInput('');   // intelligence: Number,
  const [wisdom, wisdomOnChange] = useInput('');   // wisdom: Number,
  const [charisma, charismaOnChange] = useInput('');    // charisma: Number,
  const [speed, speedOnChange] = useInput('');// speed: Number,
  const [initiative, initiativeOnChange] = useInput(''); // initiative: Number,
  const [armor_class, armor_classOnChange] = useInput('');    // armor_class: Number


  const saveCharacter = () => {
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
    fetch('/create',{
      method:'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data )=> {
        console.log(data);
      })
      .catch(err => console.log('CreateCharacter fetch ERROR: ',err));
  };
  // bracket above is forr save char fxn

  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
        <h2>Character Creator</h2>

      </header>
      <article className="card createChar">
        <h3>Enter your character details</h3>
        <div className="createCharFields">
          <label htmlFor="name">Name: </label>
          <input name="name" placeholder="Your Character name" value={name} onChange={nameOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="level">level: </label>
          <input name="level" placeholder="Your Character level" value={level} onChange={levelOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="classtype">classtype: </label>
          <input name="classtype" placeholder="Your Character class_" value={classtype} onChange={classtypeOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="race">race: </label>
          <input name="race" placeholder="Your Character race" value={race} onChange={raceOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="total_hp">total_hp: </label>
          <input name="total_hp" placeholder="Your Character total_hp" value={total_hp} onChange={total_hpOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="current_hp">current_hp: </label>
          <input name="current_hp" placeholder="Your Character current_hp" value={current_hp} onChange={current_hpOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="strength">strength: </label>
          <input name="strength" placeholder="Your Character strength" value={strength} onChange={strengthOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="dexterity">dexterity: </label>
          <input name="dexterity" placeholder="Your Character dexterity" value={dexterity} onChange={dexterityOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="constitution">constitution: </label>
          <input name="constitution" placeholder="Your Character constitution" value={constitution} onChange={constitutionOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="intelligence">intelligence: </label>
          <input name="intelligence" placeholder="Your Character intelligence" value={intelligence} onChange={intelligenceOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="wisdom">wisdom: </label>
          <input name="wisdom" placeholder="Your Character wisdom" value={wisdom} onChange={wisdomOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="charisma">charisma: </label>
          <input name="charisma" placeholder="Your Character charisma" value={charisma} onChange={charismaOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="speed">speed: </label>
          <input name="speed" placeholder="Your Character speed" value={speed} onChange={speedOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="initiative">initiative: </label>
          <input name="initiative" placeholder="Your Character initiative" value={initiative} onChange={initiativeOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="armor_class">armor_class: </label>
          <input name="armor_class" placeholder="Your Character armor_class" value={armor_class} onChange={armor_classOnChange} />
        </div>
        <div className="createCharButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
                Cancel
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btnMain" onClick={saveCharacter}>Save</button>
          </Link>
        </div>
      </article>
    </section>
  
  );
}

export default withRouter(CreateCharacter);
// export default CreateCharacter;