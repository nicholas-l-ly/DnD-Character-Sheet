import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { useEffect ,useState } from 'react';


const CharacterSheet = props =>{
  const [characterList, setcharacterList] = useState([]);

  // function getList(){
  
  //   fetch('/get')
  //     .then(res => {
  //       const result = res.json();
  //       console.log(result);
  //     })
  //     .then(
  //       (data) =>{
  //         console.log(data);
  //         // setcharacterList(data);
  //       }
  //     ).catch(err => console.log('Character List fetch ERROR: ',err));
  // }
  
  // getList();
  

  return(
    <div>
      <h1>Character Sheet</h1>
      <Link to={'/create'}>
        <button type='button' className='btnSecondary'>
          Create Character
        </button>
      </Link>
      <Link to={'/load'}>
        <button type='button' className='btnSecondary'>
          Load Character
        </button>
      </Link>
      <Link to={'/delete'}>
        <button type='button' className='btnSecondary'>
          Delete Character
        </button>
      </Link>
    </div>
  );
};

export default CharacterSheet;