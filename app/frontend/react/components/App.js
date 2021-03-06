import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SandwichIndex from './SandwichIndex';
import ReviewsContainer from './ReviewsContainer';
import SandwichShow from './SandwichShow';
import styles from '../../../assets/stylesheets/application';


const App = (props) => (
  <Router>
    <div>
      <Route
        exact path='/'
        component={SandwichIndex}
      />
      <Route
        path='/sandwiches/:sandwich_id/reviews'
        component={ReviewsContainer}
      />
      <Route
        path='/sandwiches/:id'
        component={SandwichShow}
      />
    </div>
  </Router>
);

export default App;
