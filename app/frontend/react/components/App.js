import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SandwichIndex from './SandwichIndex';
import SandwichShow from './SandwichShow';

const App = (props) => (
  <Router>
    <div>
      <Route
        exact path='/'
        component={SandwichIndex}
      />
      <Route
        path='/:id'
        component={SandwichShow}
      />

    </div>
  </Router>
);

export default App;
