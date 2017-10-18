import React, { Component } from 'react';

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
        <div>
          <h3>{sandwich.name}</h3>
          <h3>{sandwich.description}</h3>
          <h3>{sandwich.image_url}</h3>
          {/* this is where we'll add a SandwichTile */}
        </div>
      );
    });
    return(
      <div className="heading">
        {sandwiches}
      </div>
    );
  }
}

export default SandwichIndex;
