import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SandwichView from './SandwichView';

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={SandwichView}
      />
    </div>
  </Router>
);

export default App;
