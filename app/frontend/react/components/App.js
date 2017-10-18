import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SandwichIndex from './SandwichIndex';

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={SandwichIndex}
      />
    </div>
  </Router>
);

export default App;
