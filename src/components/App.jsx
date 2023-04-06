import React, { Component, useState } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import CharacterSheet from './CharacterSheet';
import { useEffect } from 'react';
import DeleteCharacter from './DeleteCharacter';
import LoadCharacter from './LoadCharacter';



function App(){



  return(
    <div className='router'>
      <h1>DND</h1>
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
