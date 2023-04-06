import React, { Component, useState } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import CharacterSheet from './CharacterSheet';
import DeleteCharacter from './DeleteCharacter';
import LoadCharacter from './LoadCharacter';

import '../styles.css';


function App(){



  return(
    <div className='router'>
      <main>
        <BrowserRouter>
          <Switch>
            <Route 
              exact 
              path="/"
              component={CharacterSheet}
            />
            <Route
              exact
              path="/create"
              component={CreateCharacter}
            />
            <Route
              exact
              path="/delete"
              component={DeleteCharacter}
            />
            <Route
              exact
              path="/load"
              component={LoadCharacter}
            />
          </Switch> 
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
