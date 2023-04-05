import React, { Component } from 'react';
import CreateCharacter from './CreateCharacter';
import CharacterSheet from './CreateCharacter';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Switch
} from 'react-router-dom';


const App = props => {
  return(
    <div className='router'>
      <h1>Solo Project</h1>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={CharacterSheet}
          />
          <Route
            exact
            path="/"
            component={CreateCharacter}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;