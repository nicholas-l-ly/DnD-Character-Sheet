import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};
function DeleteCharacter(){

  const [name, nameOnChange ] = useInput('');
  const deleteCharacter = () => {
    const body = {name};

    
    fetch('/delete', {
      method:'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    });
  };

  return(
    <section className='mainSection deleteCharContainer'>
      <h2>Character Deleter</h2>
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
        <button type="button" className="btnMain" onClick={deleteCharacter}>Delete</button>
 
      </article>
    </section>
        
  );
}

export default withRouter(DeleteCharacter);