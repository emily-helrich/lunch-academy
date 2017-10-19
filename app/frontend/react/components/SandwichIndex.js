import React, { Component } from 'react';
import SandwichTile from './SandwichTile'

class SandwichIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwichData: []
    };
  }

  componentWillMount() {
    fetch('/api/v1/sandwiches.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json() )
      .then((body) => {
        this.setState({ sandwichData: body.sandwiches});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    let sandwiches = this.state.sandwichData.map((sandwich) => {
      return(
        <SandwichTile
          key={sandwich.id}
          id={sandwich.id}
          name={sandwich.name}
          description={sandwich.description}
          image_url={sandwich.image_url}
        />
      );
    });
    return(
      <div>
        {sandwiches}
      </div>
    );
  }
}

export default SandwichIndex;
