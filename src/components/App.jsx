import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import CreateCharacter from './CreateCharacter';
import CharacterSheet from './CreateCharacter';



const App = props => {
  return(
    <div className='router'>
      <h1>Solo Project</h1>
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
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
