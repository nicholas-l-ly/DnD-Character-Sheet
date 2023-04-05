import React, { Component, useState } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import CharacterSheet from './CharacterSheet';
import { useEffect } from 'react';
import DeleteCharacter from './DeleteCharacter';



function App(){



  return(
    <div className='router'>
      <h1>Solo Project</h1>
      <main>
        <BrowserRouter>
          <Switch>
            {/* <CharacterSheet/> */}
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
          </Switch> 
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
